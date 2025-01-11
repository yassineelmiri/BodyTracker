import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import { calculateBodyFat } from '../utils/BodyFatUtils';

export default function BodyFatScreen() {
  const [measures, setMeasures] = useState({
    taille: '',
    cou: '',
    hanche: '',
  });
  const [bodyFat, setBodyFat] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0)); // Animation de fondu

  useEffect(() => {
    // Animation de fondu lors du chargement
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleCalculate = () => {
    const fat = calculateBodyFat(measures);
    setBodyFat(fat);
  };

  const renderInput = (label, value, onChangeText, placeholder) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#888"
      />
    </View>
  );

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.header}>Calcul du pourcentage de graisse corporelle</Text>

      {renderInput('Tour de taille (cm)', measures.taille, (val) => setMeasures({ ...measures, taille: val }), 'Ex : 85')}
      {renderInput('Tour de cou (cm)', measures.cou, (val) => setMeasures({ ...measures, cou: val }), 'Ex : 40')}
      {renderInput('Tour de hanche (cm)', measures.hanche, (val) => setMeasures({ ...measures, hanche: val }), 'Ex : 90')}

      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculer</Text>
      </TouchableOpacity>

      {bodyFat !== null && (
        <Text style={styles.result}>
          Pourcentage de graisse corporelle :{' '}
          <Text style={styles.resultValue}>{bodyFat}%</Text>
        </Text>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Mode sombre
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', // Texte blanc
    textAlign: 'center',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
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
  button: {
    backgroundColor: '#6200ea',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 30,
  },
  resultValue: {
    color: '#ff6f00',
  },
});
