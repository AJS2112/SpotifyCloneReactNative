import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 50,
        backgroundColor: 'black',
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center'
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
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
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    artist: {
        color: 'lightgray',
        fontSize: 16,
        marginLeft: 10

    }
})

export default styles;