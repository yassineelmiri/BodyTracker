import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, Animated, FlatList, Image, Easing, Alert } from 'react-native';

export default function TimelapseScreen() {
    const [photos, setPhotos] = useState([
        // Exemple de photos (vous pouvez remplacer les URLs par des chemins locaux ou dynamiques)
        { id: '1', uri: 'https://via.placeholder.com/150' },
        { id: '2', uri: 'https://via.placeholder.com/150' },
        { id: '3', uri: 'https://via.placeholder.com/150' },
    ]);

    const fadeAnim = useRef(new Animated.Value(0)).current; // Animation pour le titre

    useEffect(() => {
        // Animation du titre
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    const generateTimelapse = () => {
        if (photos.length === 0) {
            Alert.alert('Aucune photo', 'Ajoutez des photos pour générer un timelapse.');
            return;
        }
        Alert.alert('Timelapse généré', 'Votre timelapse a été généré avec succès !');
        // Ajoutez ici votre logique pour créer une vidéo timelapse
    };

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
                Générateur de Timelapse
            </Animated.Text>

            <FlatList
                data={photos}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.photoContainer}>
                        <Image source={{ uri: item.uri }} style={styles.photo} />
                    </View>
                )}
                contentContainerStyle={styles.photoList}
                showsHorizontalScrollIndicator={false}
            />

            <View style={styles.buttonContainer}>
                <Button title="Générer Timelapse" onPress={generateTimelapse} color="#ffa500" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Fond sombre
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff', // Texte blanc
        textAlign: 'center',
        marginBottom: 20,
    },
    photoList: {
        marginBottom: 20,
    },
    photoContainer: {
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    buttonContainer: {
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
});