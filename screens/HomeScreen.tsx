import { StyleSheet, View, Text, FlatList } from 'react-native';
import { RootTabScreenProps } from '../types';
import AlbumCategory from '../components/AlbumCategory';
import AlbumCategories from '../data/albumCategories';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  console.log(AlbumCategories)
  return (
    <View style={styles.container}>
      <FlatList
        data={AlbumCategories}
        renderItem={({ item }) => (
          <AlbumCategory
            id={item.id}
            title={item.title}
            albums={item.albums}
          />
        )}
        keyExtractor={(item) => item.id}
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

