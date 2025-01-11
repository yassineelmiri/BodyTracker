import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Animation pour le titre
  const buttonScale = useRef(new Animated.Value(1)).current; // Animation pour les boutons

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleButtonPressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const renderButton = (title, navigateTo) => (
    <Animated.View style={[styles.animatedButton, { transform: [{ scale: buttonScale }] }]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(navigateTo)}
        activeOpacity={0.8}
        onPressIn={handleButtonPressIn}
        onPressOut={handleButtonPressOut}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <ImageBackground
      source={require('../assets/image.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay} >
        <View style={styles.container}>
          <Animated.Text style={[styles.title, { opacity: fadeAnim }]} numberOfLines={3}>
            Bienvenue dans votre application de suivi santé !
          </Animated.Text>
          {renderButton('Profil Utilisateur', 'Profile')}
          {renderButton('Calcul Graisse ', 'BodyFat')}
          {renderButton('Photos de Progression', 'Photos')}
          {renderButton('Générer un Timelapse', 'Timelapse')}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // L'image couvre toute la page
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fond semi-transparent renforcé
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  animatedButton: {
    width: '80%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'linear-gradient(45deg, #6a11cb, #2575fc)', // Dégradé pour le bouton
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
