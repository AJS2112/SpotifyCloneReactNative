import React from 'react';
import { View, Text, Image } from 'react-native';
import { Song } from '../../types';
import styles from './styles';


export type SongListItemProps = {
    song: Song
}

const SongListItem = (props: SongListItemProps) => {
    const { song } = props;
    console.log('------- song  --------')
    console.log(song);
    return (
        <View style={styles.container}>
            <Image source={song.imageUri} style={styles.image} />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
        </View>

    );
}

export default SongListItem;