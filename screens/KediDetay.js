import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'


const KediDetay = ({ route }) =>
{
    const { item } = route.params;

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: item.Foto }} />
            <Text style={styles.header} >{item.isim}</Text>
            <Text style={styles.detay}>{item.detay}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        borderRadius: 5
    },
    header: {
        fontSize: 24,
        fontWeight: 600,
        textAlign: 'center',
        margin: 10,
        color: '#333'
    },
    detay: {
        padding: 10, color: '#666',
        fontSize: 18
    }
})

export default KediDetay