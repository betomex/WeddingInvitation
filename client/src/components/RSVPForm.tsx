import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Heart, Send } from "lucide-react";

const rsvpSchema = z.object({
  fullName: z.string().min(2, "Пожалуйста, введите своё имя и фамилию"),
  guestCount: z.string().min(1, "Пожалуйста, выберите количество гостей"),
  attendingCeremony: z.boolean(),
  attendingReception: z.boolean(),
  specialRequests: z.string().optional(),
  message: z.string().optional(),
}).refine(data => data.attendingCeremony || data.attendingReception, {
  message: "Пожалуйста, выберите хотя бы одно мероприятие",
  path: ["attendingCeremony"]
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export default function RSVPForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      fullName: "",
      guestCount: "",
      attendingCeremony: true,
      attendingReception: true,
      specialRequests: "",
      message: "",
    },
  });

  const rsvpMutation = useMutation({
    mutationFn: async (data: RSVPFormData) => {
      try {
        const response = await fetch('http://localhost:5000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
      } catch (error) {
        console.error('Ошибка:', error);
      }
    },
    onSuccess: (response) => {
      toast({
        title: "Отправлено!",
        description: "Спасибо за ответ. До встречи!",
      });
      // form.reset();
      // Invalidate RSVP queries if we had any
      queryClient.invalidateQueries({ queryKey: ["/api/rsvp"] });
    },
    onError: (error: any) => {
      console.log(error)
      const errorMessage = error?.error === "RSVP already submitted for this email address"
        ? "Вы уже отправляли ответ с данного устройства."
        : "Возникла проблема при отправке данных. Пожалуйста, сообщите нам об этом.";

      toast({
        title: "Ошибка((",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (data: RSVPFormData) => {
    rsvpMutation.mutate(data);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heart className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Анкета гостя</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Пожалуйста, дайте нам знать собираетесь ли вы присоединиться к мероприятию
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  {/* Name and Contact */}
                  <div className="grid md:grid-cols-2 gap-4 pt-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя и фамилия *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Введите своё имя и фамилию"
                              {...field}
                              data-testid="input-full-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="guestCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Количество гостей *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-guest-count">
                                <SelectValue placeholder="Выберите количество гостей" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">Я один</SelectItem>
                              <SelectItem value="2">Я и +1 гость</SelectItem>
                              <SelectItem value="3">Я и +2 гостя</SelectItem>
                              <SelectItem value="4">Я и +3 гостя</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Event Attendance */}
                  <div className="space-y-4">
                    <FormLabel className="text-base font-medium">Какие мероприятия собираетесь посетить? *</FormLabel>

                    <div className="space-y-3">
                      <FormField
                        control={form.control}
                        name="attendingCeremony"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                data-testid="checkbox-ceremony"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Свадебная церемония (15:30)</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="attendingReception"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                data-testid="checkbox-reception"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Банкет (18:00)</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormMessage />
                  </div>

                  {/* Special Requests */}
                  <FormField
                    control={form.control}
                    name="specialRequests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Предпочтения из напитков</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Шампанское, коньяк, виски..."
                            {...field}
                            data-testid="input-special-requests"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Сообщение для нас</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Можете оставить здесь свои пожелания или просто что-то написать..."
                            className="min-h-[100px]"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={rsvpMutation.isPending}
                    data-testid="button-submit-rsvp"
                  >
                    {rsvpMutation.isPending ? (
                      "Отправка..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Отправить
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}