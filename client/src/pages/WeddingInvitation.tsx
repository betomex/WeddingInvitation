import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import WeddingHero from "@/components/WeddingHero";
import StoryTimeline from "@/components/StoryTimeline";
import EventDetails from "@/components/EventDetails";
import WeddingGallery from "@/components/WeddingGallery";
import RSVPForm from "@/components/RSVPForm";
import GuestInformation from "@/components/GuestInformation";
import { Heart } from "lucide-react";

// Import images
import engagementPhoto from "@assets/generated_images/Romantic_couple_engagement_photo_2d574447.png";
import formalPhoto from "@assets/generated_images/Elegant_couple_formal_portrait_2cc50f94.png";
import gardenPhoto from "@assets/generated_images/Couple_walking_garden_photo_c07c8661.png";
import laughingPhoto from "@assets/generated_images/Joyful_couple_laughing_photo_e4466ae0.png";
import venuePhoto from "@assets/generated_images/Couple_silhouette_wedding_venue_1cac4d9b.png";
import heroBackground from "@assets/generated_images/Romantic_wedding_hero_background_df0e6883.png";

export default function WeddingInvitation() {
  const [activeSection, setActiveSection] = useState('hero');

  // todo: remove mock functionality
  const mockStories = [
    {
      date: "March 2020",
      title: "First Meeting",
      description: "We met at a cozy coffee shop downtown during a rainy afternoon. What started as a chance encounter over spilled coffee turned into hours of conversation and instant connection.",
      image: engagementPhoto
    },
    {
      date: "December 2021", 
      title: "First Trip Together",
      description: "Our first adventure together took us to the mountains, where we discovered our shared love for hiking and watching sunsets. It was here we knew we had found something special.",
      image: gardenPhoto
    },
    {
      date: "August 2023",
      title: "The Proposal", 
      description: "Under the same sunset where we first realized we were meant to be, Alexander got down on one knee and asked Elena to be his forever. Of course, she said yes!",
      image: formalPhoto
    },
    {
      date: "Today",
      title: "Our Wedding Day",
      description: "After years of love, laughter, and building a life together, we're ready to say 'I do' and celebrate with all the people who mean the most to us.",
      image: laughingPhoto
    }
  ];

  const mockEventData = {
    ceremony: {
      date: "Saturday, June 15th, 2024",
      time: "4:00 PM",
      venue: "St. Mary's Cathedral",
      address: "123 Cathedral Ave, Downtown City, ST 12345",
      mapUrl: "https://maps.google.com"
    },
    reception: {
      date: "Saturday, June 15th, 2024", 
      time: "6:00 PM",
      venue: "Grand Ballroom Hotel",
      address: "456 Elegant St, Downtown City, ST 12345",
      mapUrl: "https://maps.google.com"
    },
    schedule: [
      { 
        time: "3:30 PM", 
        event: "Guest Arrival", 
        description: "Please arrive early for the ceremony seating" 
      },
      { 
        time: "4:00 PM", 
        event: "Wedding Ceremony", 
        description: "Exchange of vows and rings" 
      },
      { 
        time: "4:30 PM", 
        event: "Cocktail Hour", 
        description: "Celebrate with drinks and appetizers" 
      },
      { 
        time: "6:00 PM", 
        event: "Reception Dinner", 
        description: "Three-course dinner with live music" 
      },
      { 
        time: "8:00 PM", 
        event: "First Dance", 
        description: "Join us on the dance floor" 
      },
      { 
        time: "9:00 PM", 
        event: "Dancing & Celebration", 
        description: "Party the night away until midnight" 
      }
    ]
  };

  const mockPhotos = [
    {
      src: engagementPhoto,
      alt: "Engagement photo",
      caption: "The moment everything changed - our engagement day"
    },
    {
      src: formalPhoto,
      alt: "Formal couple portrait",
      caption: "Dressed up for our engagement party"
    },
    {
      src: gardenPhoto,
      alt: "Couple walking in garden",
      caption: "A peaceful walk in our favorite park"
    },
    {
      src: laughingPhoto,
      alt: "Couple laughing together",
      caption: "Laughter is the soundtrack to our love"
    },
    {
      src: venuePhoto,
      alt: "Wedding venue silhouette",
      caption: "Our beautiful wedding venue at sunset"
    },
    {
      src: heroBackground,
      alt: "Romantic wedding background",
      caption: "The perfect romantic setting for our special day"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRSVPSubmit = async (data: any) => {
    console.log('RSVP submitted:', data);
    // todo: remove mock functionality - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  // Intersection Observer for section tracking
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ['hero', 'story', 'details', 'gallery', 'rsvp', 'info'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation onSectionClick={setActiveSection} />
      
      <main>
        <section id="hero">
          <WeddingHero 
            groomName="Alexander"
            brideName="Elena" 
            weddingDate="June 15, 2024"
            onLearnMore={() => scrollToSection('story')}
          />
        </section>

        <section id="story">
          <StoryTimeline stories={mockStories} />
        </section>

        <section id="details">
          <EventDetails {...mockEventData} />
        </section>

        <section id="gallery">
          <WeddingGallery photos={mockPhotos} />
        </section>

        <section id="rsvp">
          <RSVPForm onSubmit={handleRSVPSubmit} />
        </section>

        <section id="info">
          <GuestInformation />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 text-center">
        <div className="container mx-auto px-4">
          <Heart className="w-8 h-8 mx-auto mb-4 text-primary" />
          <p className="font-script text-2xl mb-2">Elena & Alexander</p>
          <p className="text-muted-foreground">June 15, 2024</p>
          <p className="text-sm text-muted-foreground mt-4">
            Made with love for our special day
          </p>
        </div>
      </footer>
    </div>
  );
}