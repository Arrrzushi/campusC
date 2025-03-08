import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { Settings, Camera, CreditCard as Edit2 } from 'lucide-react-native';

const badges = [
  { id: '1', name: 'Bookworm', emoji: '📚' },
  { id: '2', name: 'Party Animal', emoji: '🎉' },
  { id: '3', name: 'Gamer', emoji: '🎮' },
  { id: '4', name: 'Sports Fan', emoji: '⚽' },
];

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#000' : '#f5f5f5' }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraButton}>
            <Camera size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.nameSection}>
          <Text style={[styles.name, { color: isDark ? '#fff' : '#000' }]}>Sarah Johnson</Text>
          <TouchableOpacity style={styles.editButton}>
            <Edit2 size={16} color="#FF4B91" />
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.course, { color: isDark ? '#888' : '#666' }]}>
          Computer Science • Junior Year
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.statBox, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
          <Text style={[styles.statNumber, { color: isDark ? '#fff' : '#000' }]}>128</Text>
          <Text style={[styles.statLabel, { color: isDark ? '#888' : '#666' }]}>Matches</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
          <Text style={[styles.statNumber, { color: isDark ? '#fff' : '#000' }]}>45</Text>
          <Text style={[styles.statLabel, { color: isDark ? '#888' : '#666' }]}>Likes</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
          <Text style={[styles.statNumber, { color: isDark ? '#fff' : '#000' }]}>12</Text>
          <Text style={[styles.statLabel, { color: isDark ? '#888' : '#666' }]}>Super Likes</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#fff' : '#000' }]}>About Me</Text>
        <Text style={[styles.bio, { color: isDark ? '#888' : '#666' }]}>
          Coffee addict ☕️ and code enthusiast 💻. Looking for someone to debug life's problems with!
          When I'm not coding, you'll find me at the campus coffee shop or hiking trails. 🏃‍♀️
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#fff' : '#000' }]}>Badges</Text>
        <View style={styles.badgesContainer}>
          {badges.map((badge) => (
            <View key={badge.id} style={[styles.badge, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
              <Text style={styles.badgeEmoji}>{badge.emoji}</Text>
              <Text style={[styles.badgeName, { color: isDark ? '#fff' : '#000' }]}>{badge.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  settingsButton: {
    padding: 10,
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FF4B91',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FF4B91',
    padding: 8,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#fff',
  },
  nameSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    gap: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  editText: {
    color: '#FF4B91',
    fontSize: 16,
  },
  course: {
    fontSize: 16,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 10,
  },
  statBox: {
    flex: 1,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    gap: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  badgeEmoji: {
    fontSize: 20,
  },
  badgeName: {
    fontSize: 14,
    fontWeight: '500',
  },
});