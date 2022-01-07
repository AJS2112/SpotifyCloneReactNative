import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        padding: 20
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    creator: {
        color: 'lightgray',
        margin: 5,
        fontSize: 16

    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 10
    },
    button: {
        backgroundColor: '#1CD050',
        height: 60,
        width: 175,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'

    }
});

export default styles;