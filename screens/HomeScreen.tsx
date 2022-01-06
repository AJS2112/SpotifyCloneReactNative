import { StyleSheet, View, Text } from 'react-native';
import { RootTabScreenProps } from '../types';
import AlbumCategory from '../components/AlbumCategory';
import { Album } from '../types';

const albumX: Album = {
  id: '1',
  imageUri: 'D:/repos/Youtube/SpotifyCloneReactNative/SpotifyClone/assets/images/albumslte-lte3.jpg',
  artistHeadline: 'Liquid Tension Experiment'
};
const albumY: Album = {
  id: '2',
  imageUri: 'D:/repos/Youtube/SpotifyCloneReactNative/SpotifyClone/assets/images/dt-avfttotw.jpg',
  artistHeadline: 'Dream Theater'
};
const albumZ: Album = {
  id: '3',
  imageUri: 'D:/repos/Youtube/SpotifyCloneReactNative/SpotifyClone/assets/images/dt-avfttotw.jpg',
  artistHeadline: 'Dream Theater'
};

const albumCategory = {
  id: '1',
  title: 'Prog Metal',
  albums: [albumX, albumY, albumZ
  ]
}


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  console.log(albumCategory)
  return (
    <View style={styles.container}>
      <AlbumCategory
        id={albumCategory.id}
        title={albumCategory.title}
        albums={albumCategory.albums}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    color: 'white'
  }
});

