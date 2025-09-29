import EventDetails from '../EventDetails';

export default function EventDetailsExample() {
  //todo: remove mock functionality
  const mockEventData = {
    ceremony: {
      date: "Saturday, June 15th, 2024",
      time: "4:00 PM",
      venue: "St. Mary's Cathedral",
      address: "123 Cathedral Ave, Downtown City, ST 12345",
      mapUrl: "https://maps.google.com"
    },
    reception: {
      date: "Saturday, June 15th, 2024", 
      time: "6:00 PM",
      venue: "Grand Ballroom Hotel",
      address: "456 Elegant St, Downtown City, ST 12345",
      mapUrl: "https://maps.google.com"
    },
    schedule: [
      { 
        time: "3:30 PM", 
        event: "Guest Arrival", 
        description: "Please arrive early for the ceremony seating" 
      },
      { 
        time: "4:00 PM", 
        event: "Wedding Ceremony", 
        description: "Exchange of vows and rings" 
      },
      { 
        time: "4:30 PM", 
        event: "Cocktail Hour", 
        description: "Celebrate with drinks and appetizers" 
      },
      { 
        time: "6:00 PM", 
        event: "Reception Dinner", 
        description: "Three-course dinner with live music" 
      },
      { 
        time: "8:00 PM", 
        event: "First Dance", 
        description: "Join us on the dance floor" 
      },
      { 
        time: "9:00 PM", 
        event: "Dancing & Celebration", 
        description: "Party the night away until midnight" 
      }
    ]
  };

  return <EventDetails {...mockEventData} />;
}