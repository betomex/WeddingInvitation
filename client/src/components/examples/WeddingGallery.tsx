import WeddingGallery from '../WeddingGallery';
import engagementPhoto from "@assets/generated_images/Romantic_couple_engagement_photo_2d574447.png";
import formalPhoto from "@assets/generated_images/Elegant_couple_formal_portrait_2cc50f94.png";
import gardenPhoto from "@assets/generated_images/Couple_walking_garden_photo_c07c8661.png";
import laughingPhoto from "@assets/generated_images/Joyful_couple_laughing_photo_e4466ae0.png";
import venuePhoto from "@assets/generated_images/Couple_silhouette_wedding_venue_1cac4d9b.png";
import heroBackground from "@assets/generated_images/Romantic_wedding_hero_background_df0e6883.png";

export default function WeddingGalleryExample() {
  //todo: remove mock functionality
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

  return <WeddingGallery photos={mockPhotos} />;
}