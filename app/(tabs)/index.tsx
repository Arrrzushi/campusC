import { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  withSequence,
} from 'react-native-reanimated';
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { X, Heart, Star } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

const SWIPE_THRESHOLD = 100;

interface Profile {
  id: string;
  name: string;
  age: number;
  course: string;
  year: string;
  bio: string;
  interests: string[];
  imageUrl: string;
}

const profiles: Profile[] = [
  {
    id: '1',
    name: 'Sarah',
    age: 20,
    course: 'Computer Science',
    year: 'Junior',
    bio: "Coffee addict ☕️ and code enthusiast 💻. Looking for someone to debug life's problems with!",
    interests: ['Programming', 'Coffee', 'Music'],
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: '2',
    name: 'Mike',
    age: 21,
    course: 'Business Administration',
    year: 'Senior',
    bio: "Future entrepreneur 📈 When I'm not planning startups, you'll find me at the gym 💪",
    interests: ['Entrepreneurship', 'Fitness', 'Travel'],
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
];

export default function DiscoverScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const cardRotate = useSharedValue(0);

  const profile = profiles[currentIndex];

  const nextProfile = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(prev => prev + 1);
      translateX.value = 0;
      translateY.value = 0;
      cardRotate.value = 0;
    }
  };

  const handleSwipe = useCallback(
    (direction: 'left' | 'right' | 'up') => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      
      const animationConfig = {
        duration: 200,
        toValue: direction === 'left' ? -500 : direction === 'right' ? 500 : -500,
      };

      translateX.value = withSequence(
        withSpring(animationConfig.toValue, { damping: 12 }),
        withSpring(0)
      );
      
      nextProfile();
    },
    [currentIndex]
  );

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
      cardRotate.value = event.translationX / 10;
    })
    .onEnd((event) => {
      if (Math.abs(event.translationX) > SWIPE_THRESHOLD) {
        handleSwipe(event.translationX > 0 ? 'right' : 'left');
      } else if (event.translationY < -SWIPE_THRESHOLD) {
        handleSwipe('up');
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        cardRotate.value = withSpring(0);
      }
    });

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: `${cardRotate.value}deg` },
    ],
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#f5f5f5' }]}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.card, cardStyle]}>
            <Image
              source={{ uri: profile.imageUrl }}
              style={styles.image}
            />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.9)']}
              style={styles.gradient}
            >
              <View style={styles.profileInfo}>
                <Text style={styles.name}>{profile.name}, {profile.age}</Text>
                <Text style={styles.course}>{profile.course} • {profile.year}</Text>
                <Text style={styles.bio}>{profile.bio}</Text>
                <View style={styles.interests}>
                  {profile.interests.map((interest, index) => (
                    <View key={index} style={styles.interestTag}>
                      <Text style={styles.interestText}>{interest}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </LinearGradient>
          </Animated.View>
        </GestureDetector>

        <View style={styles.actions}>
          <View style={[styles.actionButton, styles.nopeButton]}>
            <X size={30} color="#FF4C4C" />
          </View>
          <View style={[styles.actionButton, styles.superLikeButton]}>
            <Star size={30} color="#00E1FF" />
          </View>
          <View style={[styles.actionButton, styles.likeButton]}>
            <Heart size={30} color="#4CFF4C" />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: '70%',
    borderRadius: 20,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    padding: 20,
    justifyContent: 'flex-end',
  },
  profileInfo: {
    gap: 8,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  course: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
  },
  bio: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
    marginTop: 4,
  },
  interests: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  interestTag: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  interestText: {
    color: '#fff',
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
  },
  actionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nopeButton: {
    backgroundColor: '#FFF0F0',
  },
  superLikeButton: {
    backgroundColor: '#F0FAFF',
  },
  likeButton: {
    backgroundColor: '#F0FFF0',
  },
});