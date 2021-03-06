import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 15
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15
    },
    image: {
        width: 75,
        height: 75
    },
    text: {
        color: 'grey',
        marginTop: 10
    },
    title: {
        color: 'white',
        fontSize: 20,

    },
    artist: {
        color: 'lightgray',
        fontSize: 16,

    }
})

export default styles;