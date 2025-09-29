import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background">
      <Navigation onSectionClick={(section) => console.log('Navigating to:', section)} />
      <div className="pt-20 p-8">
        <h1 className="text-2xl font-serif">Navigation Component</h1>
        <p className="text-muted-foreground mt-2">
          Scroll down to see the navigation background change. The navigation is sticky and will adapt to different backgrounds.
        </p>
      </div>
    </div>
  );
}