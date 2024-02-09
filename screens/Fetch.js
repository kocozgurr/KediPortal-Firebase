import { View, Text, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../config/Fİrebase'

const Fetch = ({ navigation }) =>
{
    const [kedi, setKedi] = useState([])
    const kediref = db.firestore().collection('kediler')

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try
            {
                const querySnapshot = await kediref.get();
                const cats = querySnapshot.docs.map(doc =>
                {
                    const { isim, detay, Foto } = doc.data();
                    return {
                        id: doc.id,
                        isim,
                        detay,
                        Foto,
                    };
                });
                setKedi(cats);
            } catch (error)
            {
                console.error('Kedileri getirirken bir hata oluştu:', error);
            }
        };

        fetchData();
    }, []);

    //npm install @react-navigation/native @react-navigation/stack

    const renderCard = ({ item }) =>
    {


        return (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("KediDetay", { item })}>
                <Image style={styles.image} source={{ uri: item.Foto }} />
                <Text style={styles.cardTitle}>{item.isim}</Text>
                <Text style={styles.cardDetail}>{item.detay}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <FlatList
                data={kedi}
                numColumns={1}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        marginTop: '10%',
        backgroundColor: '#d3d3d3',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
        elevation: 4,
        margin: 10,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
        color: '#333'
    },
    cardDetail: {
        fontSize: 16,
        height: 150,
        color: '#666',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 8,
        objectFit: 'cover'
    },
});
export default Fetch
