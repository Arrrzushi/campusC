import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { router } from 'expo-router';
import { Mail } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function VerifyScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#f5f5f5' }]}>
      <LinearGradient
        colors={['#FF4B91', '#FF0F7B']}
        style={styles.header}
      >
        <View style={styles.iconContainer}>
          <Mail size={48} color="#fff" />
        </View>
      </LinearGradient>

      <View style={[styles.content, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>Check Your Email</Text>
        <Text style={[styles.description, { color: isDark ? '#888' : '#666' }]}>
          We've sent a verification link to your email address. Please click the link to verify your account.
        </Text>

        <TouchableOpacity
          style={styles.resendButton}
          onPress={() => {/* TODO: Implement resend verification */}}
        >
          <Text style={styles.resendButtonText}>Resend Verification Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.replace('/login')}
        >
          <Text style={styles.loginButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 96,
    height: 96,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  resendButton: {
    backgroundColor: '#FF4B91',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  resendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  loginButton: {
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FF4B91',
    fontSize: 16,
  },
});