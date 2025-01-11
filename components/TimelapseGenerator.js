import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TimelapseGenerator({ photos, onGenerate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photos sélectionnées : {photos.length}</Text>
      <Button title="Générer le timelapse" onPress={() => onGenerate(photos)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
