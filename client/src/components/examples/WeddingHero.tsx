import WeddingHero from '../WeddingHero';

export default function WeddingHeroExample() {
  return (
    <WeddingHero 
      groomName="Alexander"
      brideName="Elena" 
      weddingDate="June 15, 2024"
      onLearnMore={() => console.log('Learn more clicked')}
    />
  );
}