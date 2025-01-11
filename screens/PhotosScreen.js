import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function PhotosScreen() {
  const [type, setType] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionMessage}>
          We need your permission to access the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setType(current => (current === 'back' ? 'front' : 'back'));
  }

  // Fonction pour prendre une photo
  const takePicture = async () => {
    if (cameraRef) {
      const photoData = await cameraRef.takePictureAsync();
      setPhoto(photoData.uri); // Stocke l'URI de la photo capturée
    }
  };

  let cameraRef;

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={type}
        ref={(ref) => { cameraRef = ref }} // Référence à la caméra
      >
        <View style={styles.controlContainer}>
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
            <Text style={styles.buttonText}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.buttonText}>Capture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      
      {/* Affiche l'image capturée si elle existe */}
      {photo && <Image source={{ uri: photo }} style={styles.capturedImage} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    paddingHorizontal: 20,
  },
  permissionMessage: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
    fontWeight: '600',
  },
  camera: {
    flex: 1,
  },
  controlContainer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  flipButton: {
    backgroundColor: '#5a5a5a',
    padding: 15,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1,
    width: '40%',
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: '#ff7f50',
    padding: 15,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  capturedImage: {
    width: '100%',
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});
