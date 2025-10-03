import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, ExternalLink } from "lucide-react";

interface EventDetailsProps {
  ceremony: {
    date: string;
    time: string;
    venue: string;
    address: string;
    mapUrl: string;
  };
  reception: {
    date: string;
    time: string;
    venue: string;
    address: string;
    mapUrl: string;
  };
  schedule: Array<{
    time: string;
    event: string;
    description?: string;
  }>;
}

export default function EventDetails({ ceremony, reception, schedule }: EventDetailsProps) {
  const addToCalendar = () => {
    const startDate = new Date('2025-11-08T15:00:00');
    const endDate = new Date('2025-11-08T23:00:00');
    const title = 'Свадьба Вероники и Ильи';
    const details = 'Свадебная церемония и банкет';
    const location = ceremony.address;
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Детали события</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Вся важная информация, которая вам понадобится чтобы отпраздновать с нами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Ceremony */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="font-serif text-2xl flex items-center gap-2 text-center">
                <Calendar className="w-6 h-6 text-primary" />
                Свадебная церемония
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{ceremony.date}</p>
                  <p className="text-muted-foreground">{ceremony.time}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">{ceremony.venue}</p>
                  <p className="text-muted-foreground">{ceremony.address}</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-4"
                onClick={() => window.open(ceremony.mapUrl, '_blank')}
                data-testid="button-ceremony-map"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Как добраться
              </Button>
            </CardContent>
          </Card>

          {/* Reception */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="font-serif text-2xl flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Банкет
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{reception.date}</p>
                  <p className="text-muted-foreground">{reception.time}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">{reception.venue}</p>
                  <p className="text-muted-foreground">{reception.address}</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-4"
                onClick={() => window.open(reception.mapUrl, '_blank')}
                data-testid="button-reception-map"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Как добраться
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Schedule */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-center">Свадебное расписание</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex gap-4 pb-4 last:pb-0 border-b last:border-b-0">
                  <div className="flex-shrink-0 w-20">
                    <p className="font-medium text-primary">{item.time}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-1">{item.event}</p>
                    {item.description && (
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Add to Calendar */}
        <div className="text-center">
          <Button 
            onClick={addToCalendar}
            size="lg"
            data-testid="button-add-calendar"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Добавить в календарь
          </Button>
        </div>
      </div>
    </section>
  );
}