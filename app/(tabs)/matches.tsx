import { View, Text, StyleSheet, Image, ScrollView, useColorScheme } from 'react-native';
import { MessageCircle } from 'lucide-react-native';

const matches = [
  {
    id: '1',
    name: 'Sarah',
    course: 'Computer Science',
    lastActive: '2m ago',
    imageUrl: 'https://unsplash.com/photos/brown-monkey-on-brown-tree-branch-during-daytime-ky0NvwB5aws',
    isOnline: true,
  },
  {
    id: '2',
    name: 'Mike',
    course: 'Business Administration',
    lastActive: '1h ago',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    isOnline: false,
  },
];

export default function MatchesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#f5f5f5' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>Your Matches</Text>
      <ScrollView style={styles.matchesList}>
        {matches.map((match) => (
          <View key={match.id} style={[styles.matchCard, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
            <View style={styles.matchInfo}>
              <Image source={{ uri: match.imageUrl }} style={styles.avatar} />
              {match.isOnline && <View style={styles.onlineIndicator} />}
              <View style={styles.textContainer}>
                <Text style={[styles.name, { color: isDark ? '#fff' : '#000' }]}>{match.name}</Text>
                <Text style={[styles.course, { color: isDark ? '#888' : '#666' }]}>{match.course}</Text>
                <Text style={styles.lastActive}>{match.lastActive}</Text>
              </View>
            </View>
            <MessageCircle size={24} color="#FF4B91" />
          </View>
        ))}
      </ScrollView>
    </View>
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
  matchesList: {
    flex: 1,
  },
  matchCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
  },
  matchInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CFF4C',
    borderWidth: 2,
    borderColor: '#fff',
  },
  textContainer: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  course: {
    fontSize: 14,
    marginTop: 2,
  },
  lastActive: {
    fontSize: 12,
    color: '#FF4B91',
    marginTop: 2,
  },
});