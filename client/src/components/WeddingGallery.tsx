import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";

interface WeddingGalleryProps {
  photos: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export default function WeddingGallery({ photos }: WeddingGalleryProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsOpen(true);
  };

  const nextPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const previousPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') previousPhoto();
    if (e.key === 'Escape') setIsOpen(false);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Camera className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing the beautiful moments of our journey together. Click any photo to view it in full size.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate cursor-pointer group"
              onClick={() => openLightbox(index)}
              data-testid={`gallery-photo-${index}`}
            >
              <div className="relative aspect-square">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Camera className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
              </div>
              {photo.caption && (
                <div className="p-4">
                  <p className="text-sm text-muted-foreground text-center">{photo.caption}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent 
            className="max-w-4xl w-full p-0 bg-transparent border-none"
            onKeyDown={handleKeyDown}
          >
            <div className="relative">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 z-50 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setIsOpen(false)}
                data-testid="button-close-lightbox"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 text-white"
                onClick={previousPhoto}
                data-testid="button-previous-photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 text-white"
                onClick={nextPhoto}
                data-testid="button-next-photo"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <div className="relative">
                <img 
                  src={photos[selectedPhotoIndex]?.src} 
                  alt={photos[selectedPhotoIndex]?.alt}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Caption */}
                {photos[selectedPhotoIndex]?.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                    <p className="text-center">{photos[selectedPhotoIndex].caption}</p>
                  </div>
                )}
              </div>

              {/* Photo Counter */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {selectedPhotoIndex + 1} of {photos.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}