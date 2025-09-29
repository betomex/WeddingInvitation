import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRsvpSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendRsvpNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // RSVP Routes
  app.post("/api/rsvp", async (req, res) => {
    try {
      // Validate request body
      const validationResult = insertRsvpSchema.safeParse(req.body);
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          details: validationError.message 
        });
      }

      const rsvpData = validationResult.data;

      // Check if RSVP already exists for this email
      const existingRsvp = await storage.getRsvpByEmail(rsvpData.email);
      if (existingRsvp) {
        return res.status(409).json({ 
          error: "RSVP already submitted for this email address" 
        });
      }

      // Create RSVP
      const rsvp = await storage.createRsvp(rsvpData);

      // Send email notification to couple/organizer
      await sendRsvpNotification(rsvp);

      res.status(201).json({ 
        success: true, 
        message: "RSVP submitted successfully",
        rsvp: {
          id: rsvp.id,
          fullName: rsvp.fullName,
          submittedAt: rsvp.submittedAt
        }
      });

    } catch (error) {
      console.error("Error creating RSVP:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to submit RSVP" 
      });
    }
  });

  // Get all RSVPs (for couple/organizer to view)
  app.get("/api/rsvp", async (req, res) => {
    try {
      const rsvps = await storage.getAllRsvps();
      res.json({ rsvps });
    } catch (error) {
      console.error("Error fetching RSVPs:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to fetch RSVPs" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
