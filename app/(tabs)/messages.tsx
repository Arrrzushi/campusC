import { View, Text, StyleSheet, ScrollView, TextInput, useColorScheme } from 'react-native';
import { Send, Mic, Image as ImageIcon } from 'lucide-react-native';

const messages = [
  {
    id: '1',
    text: "Hey! I saw we're in the same Data Structures class 😊",
    sender: 'them',
    time: '10:30 AM',
  },
  {
    id: '2',
    text: "Hi! Yes, I noticed that too! How are you finding the course so far?",
    sender: 'me',
    time: '10:32 AM',
  },
  {
    id: '3',
    text: "It's challenging but really interesting! Would you like to study together sometime?",
    sender: 'them',
    time: '10:33 AM',
  },
];

export default function MessagesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#f5f5f5' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>Messages</Text>
      
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageWrapper,
              message.sender === 'me' ? styles.myMessageWrapper : null,
            ]}
          >
            <View
              style={[
                styles.message,
                message.sender === 'me' ? styles.myMessage : styles.theirMessage,
                { backgroundColor: isDark ? (message.sender === 'me' ? '#FF4B91' : '#1a1a1a') : (message.sender === 'me' ? '#FF4B91' : '#fff') }
              ]}
            >
              <Text style={[
                styles.messageText,
                { color: message.sender === 'me' ? '#fff' : (isDark ? '#fff' : '#000') }
              ]}>
                {message.text}
              </Text>
              <Text style={[
                styles.messageTime,
                { color: message.sender === 'me' ? 'rgba(255,255,255,0.7)' : (isDark ? '#888' : '#666') }
              ]}>
                {message.time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={[styles.inputContainer, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Type a message..."
            placeholderTextColor={isDark ? '#888' : '#666'}
            style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
          />
          <View style={styles.inputActions}>
            <ImageIcon size={24} color="#FF4B91" style={styles.inputIcon} />
            <Mic size={24} color="#FF4B91" style={styles.inputIcon} />
            <Send size={24} color="#FF4B91" />
          </View>
        </View>
      </View>
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
  messagesContainer: {
    flex: 1,
    marginBottom: 20,
  },
  messageWrapper: {
    marginBottom: 10,
    maxWidth: '80%',
  },
  myMessageWrapper: {
    alignSelf: 'flex-end',
  },
  message: {
    padding: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  myMessage: {
    borderBottomRightRadius: 5,
  },
  theirMessage: {
    borderBottomLeftRadius: 5,
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    marginTop: 5,
  },
  inputContainer: {
    padding: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  inputActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  inputIcon: {
    opacity: 0.8,
  },
});