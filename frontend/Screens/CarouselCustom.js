import * as React from 'react';
import { Dimensions, Text, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const images = [
    { uri: require('../Assets/checkStudents.jpg'), text: 'Bienvenu sur checkStudens' },
    { uri: require('../Assets/administrez.png'), text: 'Administrez en un click' },
    { uri: require('../Assets/connectionStudents.png'), text: 'Connexion des Etudiants' },
    { uri: require('../Assets/connectionProfessors.png'), text: 'Connexion des Professeurs' },
];

const CarouselCustom = () => {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 40 }}>
            <Carousel
                loop
                width={width - 25}
                height={300}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                renderItem={({ item, index }) => (
                    <View style={styles.imageContainer}>
                        <Image source={item.uri} style={styles.image} />
                        <View style={styles.overlay}>
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    text: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
    },
});

export default CarouselCustom;
