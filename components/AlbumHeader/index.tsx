import styles from './styles';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Album } from '../../types';

export type AlbumHeaderProps = {
    album: Album
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const { album } = props;
    return (
        <View style={styles.container}>
            <Image source={album.imageUri} style={styles.image} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.creator}>{album.numberOfLikes} likes</Text>

            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader;