import React from "react";
import { View, Text, Image } from "react-native";
import styles from './styles';
import { Album } from '../../types';

export type AlbumProps = {
    album: Album
}
const AlbumComponent = (props: AlbumProps) => {
    return (
        <View style={styles.container}>
            <Image source={require('D:/repos/Youtube/SpotifyCloneReactNative/SpotifyClone/assets/images/albums/lte-lte3.jpg')} style={styles.image} />
            <Text style={styles.text}>{props.album.artistHeadline}</Text>
        </View>
    );
}

export default AlbumComponent;
