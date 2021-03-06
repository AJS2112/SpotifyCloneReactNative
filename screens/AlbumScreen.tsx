import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';

import albumDetails from '../data/albumDetails';


const AlbumScreen = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route);
    }, [])

    return (
        <View >
            <FlatList
                data={albumDetails.songs}
                renderItem={({ item }) => <SongListItem song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
            />
        </View>
    )
}

export default AlbumScreen;