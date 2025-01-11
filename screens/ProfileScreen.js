import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importation de l'icône

export default function ProfileScreen() {
  const [profile, setProfile] = useState({
    nom: '',
    prenom: '',
    age: '',
    nationalite: '',
    poids: '',
    taille: '',
    adresse: '',
    imc: '',
    photo: null, // Nouvelle propriété pour stocker la photo
  });

  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    loadProfile();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  const loadProfile = async () => {
    try {
      const savedProfile = await AsyncStorage.getItem('profile');
      if (savedProfile) setProfile(JSON.parse(savedProfile));
    } catch (error) {
      console.error(error);
    }
  };

  const saveProfile = async () => {
    try {
      const imc = (profile.poids / (profile.taille * profile.taille)).toFixed(2);
      const updatedProfile = { ...profile, imc };
      setProfile(updatedProfile);
      await AsyncStorage.setItem('profile', JSON.stringify(updatedProfile));
      alert('Profil sauvegardé avec succès !');
    } catch (error) {
      console.error(error);
    }
  };

  const renderInput = (label, value, onChangeText, placeholder, keyboardType = 'default') => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#888"
        keyboardType={keyboardType}
      />
    </View>
  );

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Profil Utilisateur</Text>

        {/* Affichage de la photo de profil */}
        <View style={styles.photoContainer}>
          <TouchableOpacity onPress={() => { /* Fonction pour sélectionner une photo */ }}>
            <Icon name="camera-alt" size={30} color="#6200ea" />
          </TouchableOpacity>
          {profile.photo && <Image source={{ uri: profile.photo }} style={styles.profilePhoto} />}
        </View>

        {/* Affichage des données dans une carte */}
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Détails du Profil</Text>
          <Text style={styles.cardText}>Nom: {profile.nom}</Text>
          <Text style={styles.cardText}>Prénom: {profile.prenom}</Text>
          <Text style={styles.cardText}>Âge: {profile.age}</Text>
          <Text style={styles.cardText}>Nationalité: {profile.nationalite}</Text>
          <Text style={styles.cardText}>Poids: {profile.poids} kg</Text>
          <Text style={styles.cardText}>Taille: {profile.taille} m</Text>
          <Text style={styles.cardText}>Adresse: {profile.adresse}</Text>
          <Text style={styles.cardText}>
            IMC: <Text style={styles.imcValue}>{profile.imc || 'Non calculé'}</Text>
          </Text>
        </View>

        {/* Formulaire pour mettre à jour les données */}
        {renderInput('Nom', profile.nom, (nom) => setProfile({ ...profile, nom }), 'Entrez votre nom')}
        {renderInput('Prénom', profile.prenom, (prenom) => setProfile({ ...profile, prenom }), 'Entrez votre prénom')}
        {renderInput('Âge', profile.age, (age) => setProfile({ ...profile, age }), 'Entrez votre âge', 'numeric')}
        {renderInput('Nationalité', profile.nationalite, (nationalite) => setProfile({ ...profile, nationalite }), 'Entrez votre nationalité')}
        {renderInput('Poids (kg)', profile.poids, (poids) => setProfile({ ...profile, poids }), 'Ex : 70', 'numeric')}
        {renderInput('Taille (m)', profile.taille, (taille) => setProfile({ ...profile, taille }), 'Ex : 1.75', 'numeric')}
        {renderInput('Adresse', profile.adresse, (adresse) => setProfile({ ...profile, adresse }), 'Entrez votre adresse')}

        <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
          <Text style={styles.saveButtonText}>Sauvegarder</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  imcValue: {
    fontWeight: 'bold',
    color: '#6200ea',
  },
  label: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  inputGroup: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#444444',
    borderRadius: 10,
    backgroundColor: '#333333',
    color: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  saveButton: {
    backgroundColor: '#6200ea',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
