import * as React from 'react';
import { Dimensions, Text, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const images = [
    { uri: require('../Assets/checkStudents.jpg') },
    { uri: require('../Assets/connectionStudents.png') },
    { uri: require('../Assets/connectionProfessors.png') },
    { uri: require('../Assets/image4.jpg') },
    { uri: require('../Assets/logoHome.png') },
    { uri: require('../Assets/checkStudents.jpg') },
];

const CarouselCustom = () => {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 ,alignItems:'center', paddingTop:40}}>
            <Carousel
                loop
                width={310}
                height={190}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item, index }) => (
                    <View style={styles.imageContainer}>
                        <Image source={item.uri} style={styles.image} />
                        <View style={styles.overlay}>
                            <Text style={styles.text}>{`Image ${index + 1}`}</Text>
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
