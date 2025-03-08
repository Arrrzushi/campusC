import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import { router } from 'expo-router';
import { Lock, Mail, User, GraduationCap, Calendar } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    course: '',
    year: '',
  });
  
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleRegister = async () => {
    // TODO: Implement Supabase registration
    router.replace('/verify');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#000' : '#f5f5f5' }]}>
      <LinearGradient
        colors={['#FF4B91', '#FF0F7B']}
        style={styles.header}
      >
        <Text style={styles.title}>Join Campus Connect</Text>
        <Text style={styles.subtitle}>Create your profile and start connecting</Text>
      </LinearGradient>

      <View style={[styles.formContainer, { backgroundColor: isDark ? '#1a1a1a' : '#fff' }]}>
        <View style={styles.inputContainer}>
          <Mail size={20} color={isDark ? '#888' : '#666'} />
          <TextInput
            placeholder="College Email"
            placeholderTextColor={isDark ? '#888' : '#666'}
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
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
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <User size={20} color={isDark ? '#888' : '#666'} />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor={isDark ? '#888' : '#666'}
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
            style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
          />
        </View>

        <View style={styles.inputContainer}>
          <GraduationCap size={20} color={isDark ? '#888' : '#666'} />
          <TextInput
            placeholder="Course"
            placeholderTextColor={isDark ? '#888' : '#666'}
            value={formData.course}
            onChangeText={(text) => setFormData({ ...formData, course: text })}
            style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
          />
        </View>

        <View style={styles.inputContainer}>
          <Calendar size={20} color={isDark ? '#888' : '#666'} />
          <TextInput
            placeholder="Year"
            placeholderTextColor={isDark ? '#888' : '#666'}
            value={formData.year}
            onChangeText={(text) => setFormData({ ...formData, year: text })}
            style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
          />
        </View>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.back()}
        >
          <Text style={styles.loginButtonText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
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
  registerButton: {
    backgroundColor: '#FF4B91',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  loginButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FF4B91',
    fontSize: 16,
  },
});