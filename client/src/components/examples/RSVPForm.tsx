import RSVPForm from '../RSVPForm';

export default function RSVPFormExample() {
  const handleSubmit = async (data: any) => {
    console.log('RSVP submitted:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return <RSVPForm onSubmit={handleSubmit} />;
}