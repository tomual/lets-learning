import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import styles from './Styles';
import Button from './Button';


export default function App() {
    let [selectedImage, setSelectedImage] = React.useState(null);
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera required');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
        console.log(pickerResult);
    };

    let openShareDialogAsync = async () => {
        if (!(await Sharing.isAvailableAsync())) {
            alert('Sharing not availale');
            return;
        }

        Sharing.shareAsync(selectedImage.localUri);
    }

    let goBack = () => {
        setSelectedImage(null);
    }

    if (selectedImage !== null) {
        return (
            <View style={styles.container}>
                <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />

                <Button onpress={openShareDialogAsync} text="Share this photo" />
                <Button onpress={goBack} text="Go back" />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.logo} >
                🌄
            </Text>

            <Text style={styles.instructions} >
                To share a photo from your phone with a friend, just press the button below!
            </Text>

            <Button onpress={openImagePickerAsync} text="Pick a photo" />
        </View>
    );
}
