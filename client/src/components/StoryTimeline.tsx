import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import engagementPhoto from "@assets/generated_images/Romantic_couple_engagement_photo_2d574447.png";
import formalPhoto from "@assets/generated_images/Elegant_couple_formal_portrait_2cc50f94.png";
import gardenPhoto from "@assets/generated_images/Couple_walking_garden_photo_c07c8661.png";
import laughingPhoto from "@assets/generated_images/Joyful_couple_laughing_photo_e4466ae0.png";

interface StoryEvent {
  date: string;
  title: string;
  description: string;
  image: string;
}

interface StoryTimelineProps {
  stories: StoryEvent[];
}

export default function StoryTimeline({ stories }: StoryTimelineProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heart className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Наша история</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждая история любви красива по своему, как и наша. Вот те моменты, которые привели нас к этому особому дню
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden md:block" />
          
          {/* Timeline Events */}
          <div className="space-y-12 md:space-y-16">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <Card className="p-6 hover-elevate">
                    <div className="text-center md:text-left">
                      <p className="text-primary font-medium mb-2">{story.date}</p>
                      <h3 className="font-serif text-2xl font-bold mb-3">{story.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{story.description}</p>
                    </div>
                  </Card>
                </div>
                
                {/* Timeline Dot */}
                <div className="relative hidden md:block">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md" />
                </div>
                
                {/* Image */}
                <div className="flex-1">
                  <div className="relative">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}