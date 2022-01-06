import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

const album = {
    id: '1',
    name: 'LTE3',
    by: 'Liquid Tension Experiment',
    numberOfLikes: 3777,
    imageUri: require('../assets/images/albums/lte-lte3.jpg'),
    artistHeadline: 'Liquid Tension Experiment',
    songs: [
        {
            id: '1',
            imageUri: require('../assets/images/albums/lte-lte3.jpg'),
            title: 'Hypersonic',
            artist: 'Liquid Tension Experiment'
        },
        {
            id: '2',
            imageUri: require('../assets/images/albums/lte-lte3.jpg'),
            title: 'Passing of Time',
            artist: 'Liquid Tension Experiment'
        },
        {
            id: '3',
            imageUri: require('../assets/images/albums/lte-lte3.jpg'),
            title: 'When the Water Breaks',
            artist: 'Liquid Tension Experiment'
        }
    ]
}


const AlbumScreen = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route);
    }, [])

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ color: 'white' }}>Hello from album screen</Text>
        </View>
    )
}

export default AlbumScreen;