import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { Heart, MessageCircle, Send } from 'lucide-react-native';

const confessions = [
  {
    id: '1',
    text: "To the girl in Advanced Algorithms who always helps others understand the concepts - you're amazing and I have a huge crush on you! 💻❤️",
    likes: 45,
    comments: 12,
    timestamp: '2h ago',
  },
  {
    id: '2',
    text: "Saw you at the library yesterday, studying for finals. Your dedication is inspiring. Coffee sometime? ☕️",
    likes: 32,
    comments: 8,
    timestamp: '4h ago',
  },
];

export default function ConfessionsScreen() {
  const [newConfession, setNewConfession] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handlePost = () => {
    // TODO: Implement confession posting
    setNewConfession('');
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#f5f5f5' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>Campus Confessions</Text>

      <View style={[styles.inputContainer, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
        <TextInput
          placeholder="Share your confession anonymously..."
          placeholderTextColor={isDark ? '#888' : '#666'}
          value={newConfession}
          onChangeText={setNewConfession}
          style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
          multiline
        />
        <TouchableOpacity
          style={[styles.postButton, { opacity: newConfession.length > 0 ? 1 : 0.5 }]}
          onPress={handlePost}
          disabled={newConfession.length === 0}
        >
          <Send size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.confessionsList}>
        {confessions.map((confession) => (
          <View
            key={confession.id}
            style={[styles.confessionCard, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}
          >
            <Text style={[styles.confessionText, { color: isDark ? '#fff' : '#000' }]}>
              {confession.text}
            </Text>
            
            <View style={styles.confessionFooter}>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Heart size={20} color="#FF4B91" />
                  <Text style={styles.actionText}>{confession.likes}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.actionButton}>
                  <MessageCircle size={20} color="#FF4B91" />
                  <Text style={styles.actionText}>{confession.comments}</Text>
                </TouchableOpacity>
              </View>
              
              <Text style={[styles.timestamp, { color: isDark ? '#888' : '#666' }]}>
                {confession.timestamp}
              </Text>
            </View>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
    minHeight: 80,
    maxHeight: 120,
    fontSize: 16,
    marginRight: 10,
  },
  postButton: {
    backgroundColor: '#FF4B91',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confessionsList: {
    flex: 1,
  },
  confessionCard: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  confessionText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  confessionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    gap: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  actionText: {
    color: '#FF4B91',
    fontSize: 14,
  },
  timestamp: {
    fontSize: 12,
  },
});