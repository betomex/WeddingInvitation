import StoryTimeline from '../StoryTimeline';
import engagementPhoto from "@assets/generated_images/Romantic_couple_engagement_photo_2d574447.png";
import formalPhoto from "@assets/generated_images/Elegant_couple_formal_portrait_2cc50f94.png";
import gardenPhoto from "@assets/generated_images/Couple_walking_garden_photo_c07c8661.png";
import laughingPhoto from "@assets/generated_images/Joyful_couple_laughing_photo_e4466ae0.png";

export default function StoryTimelineExample() {
  //todo: remove mock functionality
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

  return <StoryTimeline stories={mockStories} />;
}