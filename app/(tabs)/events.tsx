import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { Calendar, MapPin, Clock, Users } from 'lucide-react-native';

const events = [
  {
    id: '1',
    title: 'Campus Movie Night',
    date: 'Feb 15, 2024',
    time: '7:00 PM',
    location: 'Student Center',
    attendees: 156,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c',
  },
  {
    id: '2',
    title: 'Spring Break Party',
    date: 'Mar 10, 2024',
    time: '9:00 PM',
    location: 'Beach Club',
    attendees: 324,
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
  },
];

export default function EventsScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#000' : '#f5f5f5' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>Campus Events</Text>
      
      {events.map((event) => (
        <View key={event.id} style={[styles.eventCard, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
          <Image source={{ uri: event.image }} style={styles.eventImage} />
          
          <View style={styles.eventContent}>
            <Text style={[styles.eventTitle, { color: isDark ? '#fff' : '#000' }]}>{event.title}</Text>
            
            <View style={styles.eventDetails}>
              <View style={styles.detailRow}>
                <Calendar size={16} color="#FF4B91" />
                <Text style={[styles.detailText, { color: isDark ? '#888' : '#666' }]}>{event.date}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Clock size={16} color="#FF4B91" />
                <Text style={[styles.detailText, { color: isDark ? '#888' : '#666' }]}>{event.time}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <MapPin size={16} color="#FF4B91" />
                <Text style={[styles.detailText, { color: isDark ? '#888' : '#666' }]}>{event.location}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Users size={16} color="#FF4B91" />
                <Text style={[styles.detailText, { color: isDark ? '#888' : '#666' }]}>{event.attendees} attending</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.attendButton}>
              <Text style={styles.attendButtonText}>I'm Interested</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  eventCard: {
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventImage: {
    width: '100%',
    height: 200,
  },
  eventContent: {
    padding: 20,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  eventDetails: {
    gap: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  detailText: {
    fontSize: 14,
  },
  attendButton: {
    backgroundColor: '#FF4B91',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  attendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});