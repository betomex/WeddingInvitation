import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Shirt, Gift, Phone, MapPin, Clock } from "lucide-react";

export default function GuestInformation() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Guest Information</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to make our celebration perfect. We've got you covered!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dress Code */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <Shirt className="w-6 h-6 text-primary" />
                Dress Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-primary mb-1">Cocktail Attire</p>
                  <p className="text-sm text-muted-foreground">Semi-formal dress for the celebration</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">For Her:</p>
                    <p className="text-muted-foreground">Knee-length or midi dresses, elegant jumpsuits</p>
                  </div>
                  <div>
                    <p className="font-medium">For Him:</p>
                    <p className="text-muted-foreground">Suit with tie, dress shirt and slacks</p>
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <p className="text-sm font-medium text-muted-foreground">
                    Color Palette: Soft pastels and elegant neutrals preferred
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transportation & Parking */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <Car className="w-6 h-6 text-primary" />
                Getting There
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Parking</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Free valet parking available at both venues</p>
                    <p>• Street parking available on surrounding streets</p>
                    <p>• Complimentary shuttle between ceremony and reception</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Transportation</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Metro Station: Cathedral Plaza (0.3 miles)</p>
                    <p>• Taxi/Rideshare pickup area marked at venue</p>
                    <p>• Hotel shuttle available for out-of-town guests</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-3"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                  data-testid="button-directions"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Accommodations */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Accommodations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Recommended Hotels</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium">Grand Ballroom Hotel</p>
                      <p className="text-muted-foreground">Reception venue • Book by May 1st</p>
                    </div>
                    <div>
                      <p className="font-medium">Downtown Marriott</p>
                      <p className="text-muted-foreground">0.5 miles away • Group rate available</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Group Rate Code</p>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="font-mono text-sm text-center">ELENA-ALEX-2024</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-center">
                    Use this code when booking for special rates
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gifts */}
          <Card className="hover-elevate lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <Gift className="w-6 h-6 text-primary" />
                Registry & Gifts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Your presence at our wedding is the greatest gift we could ask for. However, if you would like 
                  to honor us with a gift, we have registered at a few places for your convenience.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-medium">Wedding Registry</p>
                    <div className="space-y-1 text-sm">
                      <p>• Target</p>
                      <p>• Bed Bath & Beyond</p>
                      <p>• Amazon</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-medium">Honeymoon Fund</p>
                    <p className="text-sm text-muted-foreground">
                      We're planning a romantic trip to Italy! Contributions to our honeymoon 
                      fund would help us create unforgettable memories.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" data-testid="button-registry">
                    View Registry
                  </Button>
                  <Button variant="outline" size="sm" data-testid="button-honeymoon-fund">
                    Honeymoon Fund
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <Phone className="w-6 h-6 text-primary" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Wedding Coordinator</p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-muted-foreground">sarah@weddingplanner.com</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Maid of Honor</p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">Jessica Smith</p>
                    <p className="text-muted-foreground">(555) 987-6543</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Best Man</p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">Michael Johnson</p>
                    <p className="text-muted-foreground">(555) 456-7890</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground pt-2 border-t">
                  Feel free to contact any of us with questions or for emergency assistance on the wedding day.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}