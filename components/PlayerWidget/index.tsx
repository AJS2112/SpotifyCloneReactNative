import React from 'react';
import { View, Text, Image } from 'react-native';
import { Song } from '../../types';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const song = {
    id: '1',
    imageUri: require('../../assets/images/albums/lte-lte3.jpg'),
    title: 'Hypersonic',
    artist: 'LTE'
}


const PlayerWidget = () => {
    console.log('------- song  --------')
    console.log(song);
    return (
        <View style={styles.container}>
            <Image source={song.imageUri} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign name="hearto" size={30} color={"white"} />
                    <FontAwesome name="play" size={30} color={"white"} />
                </View>
            </View>
        </View>

    );
}

export default PlayerWidget;