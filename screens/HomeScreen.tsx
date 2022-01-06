import { StyleSheet, View, Text } from 'react-native';
import { RootTabScreenProps } from '../types';
import AlbumComponent from '../components/Album';

const album = {
  id: '1',
  imageUri: 'D:/repos/Youtube/SpotifyCloneReactNative/SpotifyClone/assets/images/albumslte-lte3.jpg',
  artistHeadline: 'Dream Theater'
}


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  //console.log(album)
  return (
    <View style={styles.container}>
      <AlbumComponent album={album} />
      <Text style={styles.text}>Here is goes the album</Text>
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

