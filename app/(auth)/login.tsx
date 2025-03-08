import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { Link, router } from 'expo-router';
import { Lock, Mail } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleLogin = async () => {
    // TODO: Implement Supabase authentication
    router.replace('/(tabs)');
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#f5f5f5' }]}>
      <LinearGradient
        colors={['#FF4B91', '#FF0F7B']}
        style={styles.header}
      >
        <Text style={styles.title}>Campus Connect</Text>
        <Text style={styles.subtitle}>Find your perfect match on campus</Text>
      </LinearGradient>

      <View style={[styles.formContainer, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
        <View style={styles.inputContainer}>
          <Mail size={20} color={isDark ? '#888' : '#666'} />
          <TextInput
            placeholder="College Email"
            placeholderTextColor={isDark ? '#888' : '#666'}
            value={email}
            onChangeText={setEmail}
            style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Lock size={20} color={isDark ? '#888' : '#666'} />
          <TextInput
            placeholder="Password"
            placeholderTextColor={isDark ? '#888' : '#666'}
            value={password}
            onChangeText={setPassword}
            style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Link href="/register" asChild>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>New here? Create an account</Text>
          </TouchableOpacity>
        </Link>
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
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
  },
  formContainer: {
    flex: 1,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    gap: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF4B91',
    borderRadius: 12,
    padding: 12,
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#FF4B91',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  registerButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#FF4B91',
    fontSize: 16,
  },
});