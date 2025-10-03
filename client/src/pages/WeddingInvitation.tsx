import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import WeddingHero from "@/components/WeddingHero";
import StoryTimeline from "@/components/StoryTimeline";
import EventDetails from "@/components/EventDetails";
import WeddingGallery from "@/components/WeddingGallery";
import RSVPForm from "@/components/RSVPForm";
import GuestInformation from "@/components/GuestInformation";
import { Heart } from "lucide-react";

// Import images
import photo1 from "@assets/generated_images/1.jpg";
import photo2 from "@assets/generated_images/2.jpg";
import photo3 from "@assets/generated_images/3.jpg";
import photo4 from "@assets/generated_images/4.jpg";
import photo5 from "@assets/generated_images/5.jpg";
import photo6 from "@assets/generated_images/6.jpg";
import photo7 from "@assets/generated_images/7.jpg";
import photo8 from "@assets/generated_images/8.jpg";

import photo9 from "@assets/generated_images/9.jpg";
import photo10 from "@assets/generated_images/10.jpg";
import photo11 from "@assets/generated_images/11.jpg";
import photo12 from "@assets/generated_images/12.jpg";
import photo13 from "@assets/generated_images/13.jpg";
import photo14 from "@assets/generated_images/14.jpg";

export default function WeddingInvitation() {
  const [activeSection, setActiveSection] = useState('hero');

  // todo: remove mock functionality
  const mockStories = [
    {
      date: "Апрель 2023",
      title: "Первая встреча",
      description: "...была подстроена друзьями-сводниками или была чистой случайностью? Сходили в Funky bar (ночной клуб), выпили, потанцевали - да и в целом хорошо провели время. (фото сгенерировано нейросетью, потому что не делали тогда совместного фото)",
      image: photo1
    },
    {
      date: "Сентябрь 2023", 
      title: "Вторая встреча",
      description: "..., которая произошла в гостях у друзей. Ника заглянула к нам аккурат в ночь на свой день рождения, где мы её и поздравили",
      image: photo2
    },
    {
      date: "Январь 2024",
      title: "Третья встреча", 
      description: "..., которая состоялась после нового года и опять же у друзей, где будущего жениха застали врасплох и пригласили на первое свидание. Свидание же состоялось 7го января",
      image: photo3
    },
    {
      date: "Февраль 2024",
      title: "Наша первая поездка",
      description: "... в Гуамку, где смогли хорошо провести время вместе. Буквально ничего не получилось из задуманного. 0% плана и 100% импровизации. Зато получилось под Мезмаем прокатиться на лошадях!",
      image: photo4
    },
    {
      date: "Август 2024",
      title: "Лежим дома",
      description: "... и чудесно проводим время вместе",
      image: photo5
    },
    {
      date: "Октябрь 2024",
      title: "Поездка в Домбай",
      description: "... была глотком свежего горного воздуха и настоящим счастьем. Она подарила нам невероятные пейзажи и уютные вечера",
      image: photo6
    },
    {
      date: "Январь 2025",
      title: "Новый год",
      description: "..., который встрели вместе, в кругу родных и близких людей",
      image: photo7
    },
    {
      date: "Май 2025",
      title: "Предложение",
      description: "... состоялось в мае, в ходе нашей поездки по Крыму. Это было самым важным для нас решением",
      image: photo8
    }
  ];

  const mockEventData = {
    ceremony: {
      date: "Суббота, 8 ноября 2025",
      time: "15:30",
      venue: "Дворец бракосочетания Екатерининский зал",
      address: "ул. Офицерская, 47",
      mapUrl: "https://yandex.ru/profile/128066017990?lang=ru&no-distribution=1&view-state=mini&source=wizbiz_new_map_single"
    },
    reception: {
      date: "Суббота, 8 ноября 2025", 
      time: "18:00",
      venue: "Ресторан \"Champagne\"",
      address: "ул. 70-летия Октября, 14/1, микрорайон Юбилейный",
      mapUrl: "https://yandex.ru/profile/219785130779?lang=ru&no-distribution=1&view-state=mini&source=wizbiz_new_map_single"
    },
    schedule: [
      { 
        time: "15:00", 
        event: "Прибытие гостей", 
        description: "Приглашаем вас стать свидетелями нашей свадебной церемонии"
      },
      { 
        time: "15:30", 
        event: "Церемония", 
        description: "Приготовьте платочки для самых трогательных моментов" 
      },
      { 
        time: "17:30", 
        event: "Фуршет", 
        description: "Общение с гостями и праздничный фуршет" 
      },
      { 
        time: "18:00", 
        event: "Банкет", 
        description: "Время танцев, веселья, ваших поздравлений и вкусной еды" 
      },
    ]
  };

  const mockPhotos = [
    {
      src: photo9,
      caption: "Очень рад прогулке по парку"
    },
    {
      src: photo10,
      caption: "Ревнуем"
    },
    {
      src: photo11,
      caption: "Илья + Ника"
    },
    {
      src: photo12,
      caption: "Прикол какой-то, но мило))"
    },
    {
      src: photo13,
      caption: "Ласточки"
    },
    {
      src: photo14,
      caption: "Отмечаем свадьбу друзей"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // Intersection Observer for section tracking
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ['hero', 'story', 'details', 'gallery', 'rsvp', 'info'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation onSectionClick={setActiveSection} />
      
      <main>
        <section id="hero">
          <WeddingHero 
            groomName="Илья"
            brideName="Вероника" 
            weddingDate="8 ноября, 2025"
            onLearnMore={() => scrollToSection('story')}
          />
        </section>

        <section id="story">
          <StoryTimeline stories={mockStories} />
        </section>

        <section id="details">
          <EventDetails {...mockEventData} />
        </section>

        <section id="gallery">
          <WeddingGallery photos={mockPhotos} />
        </section>

        <section id="rsvp">
          <RSVPForm />
        </section>

        <section id="info">
          <GuestInformation />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 text-center">
        <div className="container mx-auto px-4">
          <Heart className="w-8 h-8 mx-auto mb-4 text-primary" />
          <span className="font-script text-2xl mb-2">Вероника</span>
          <span className="font-serif text-2xl mb-2"> & </span>
          <span className="font-script text-2xl mb-2">Илья</span>
          <p className="text-muted-foreground">8 ноября, 2025</p>
          <p className="text-sm text-muted-foreground mt-4">
            Сделано с любовью для нашего особого дня
          </p>
        </div>
      </footer>
    </div>
  );
}