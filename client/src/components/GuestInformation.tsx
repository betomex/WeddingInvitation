import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Shirt, Gift, Phone, MapPin, Clock, Send, Palette, MessageSquareHeart } from "lucide-react";
import WeddingColorPalette from "./Palette";

export default function GuestInformation() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Информация</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Здесь всё что вам нужно знать о нашем мероприятии. Держим вас в курсе!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dress Code */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <Shirt className="w-6 h-6 text-primary" />
                Дресс-код
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">Мы будем рады, если вы поддержите праздничную атмосферу и выберите нарядный, элегантный образ. Главное — чувствовать себя комфортно и выглядеть уместно!</p>
                  <p className="text-muted-foreground">Невесте будет приятно, если вы воздержитесь от красных и белых цветов.</p>
                </div>
                
                <div className="pt-2 border-t">
                  <p className="text-sm font-medium text-muted-foreground">
                    Примерная цветовая палитра:
                  </p>
                  <WeddingColorPalette/>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gifts */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <Gift className="w-6 h-6 text-primary" />
                Подарки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Ваше присутствие на нашей свадьбе — это самый большой подарок, о котором мы можем просить.
                </p>
                <p className="text-muted-foreground text-sm">
                  Однако, если вы желаете подарить нам что-то ценное и нужное, то будем благодарны за вклад в бюджет нашей молодой семьи.
                  Это поможет нам осуществить наши общие мечты!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <Phone className="w-6 h-6 text-primary" />
                Остались вопросы?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Невеста</p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">Конюхова Вероника</p>
                    <p className="text-muted-foreground">+7 (938) 531-24-26</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Жених</p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">Панасенко Илья</p>
                    <p className="text-muted-foreground">+7 (918) 372-14-10</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground pt-2 border-t">
                  Можете связаться с нами для уточнения интересующих вас вопросов.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <MessageSquareHeart className="w-6 h-6 text-primary" />
                Общий чат для гостей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Присоединяйтесь к нашему телеграм-каналу с новостями!
                </p>
                <p className="text-muted-foreground text-sm">
                  Делитесь фотографиями и видео с нашего торжества!
                </p>
              </div>
              <Button 
                size="lg" 
                className="w-full mt-4"
                data-testid="button-telegram"
                onClick={() => window.open('https://t.me/+zkfxxPkZZ2g4ZGZi', '_blank')}
              >
                <Send className="w-5 h-5 mr-2" />
                Присоединиться
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}