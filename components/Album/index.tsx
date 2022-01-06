import React from "react";
import { View, Text, Image } from "react-native";
import styles from './styles';

export type AlbumProps = {
    album: {
        id: string;
        imageUri: string;
        artistHeadline: string;
    }
}
//
export default function AlbumComponent(props: AlbumProps) {
    return (
        <View style={styles.container}>
            {/* <Image source={{ uri: props.album.imageUri }} style={styles.image} /> */}
            <Image source={require('D:/repos/Youtube/SpotifyCloneReactNative/SpotifyClone/assets/images/albums/lte-lte3.jpg')} style={styles.image} />
            <Text style={styles.text}>{props.album.artistHeadline}</Text>
        </View>
    );
}
