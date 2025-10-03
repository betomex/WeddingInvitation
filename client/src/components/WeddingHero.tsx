import { Button } from "@/components/ui/button";
import { Heart, ChevronDown } from "lucide-react";
import heroBackground from "@assets/generated_images/Romantic_wedding_hero_background_df0e6883.png";

interface WeddingHeroProps {
  groomName: string;
  brideName: string;
  weddingDate: string;
  onLearnMore: () => void;
}

export default function WeddingHero({ groomName, brideName, weddingDate, onLearnMore }: WeddingHeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <Heart className="w-8 h-8 mx-auto mb-6 text-primary-foreground animate-pulse" />
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4">
          <span className="block">{brideName}</span>
          <span className="text-3xl md:text-4xl mt-3 block">&</span>
          <span className="block">{groomName}</span>
        </h1>
        
        <div className="mb-8">
          <p className="text-lg md:text-xl font-light">{weddingDate}</p>
        </div>

        <Button 
           size="xl" 
           className="text-white text-lg px-8 py-3"
           data-testid="button-learn-more"
           onClick={onLearnMore}
         >
           Узнать больше
         </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
}