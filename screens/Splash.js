import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'

const Splash = ({ navigation }) =>
{
    setTimeout(() =>
    {
        navigation.navigate('Fetch')
    }, 5000)

    return (
        <View>
            <ImageBackground style={styles.background} source={require('../assets/Splash.jpg')} >
                <Text style={styles.power}>POWERED BY <Text style={styles.by}>ÖZGÜR KOÇ</Text></Text>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'

    },
    power: {
        position: 'absolute',
        top: '106%', // Yatay eksende ortalamak için
        left: '50%', // Dikey eksende ortalamak için
        transform: [{ translateX: -100 }, { translateY: -100 }],
        fontSize: 16
    },
    by: {
        color: 'red'
    }
})
export default Splash