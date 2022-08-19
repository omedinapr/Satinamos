import { ScrollView, StyleSheet, TextInput, Text, View, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function HomeListItem() {
    return (
        <View style={styles.container}>
            <Image source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }} style={styles.image} />
            <View style={styles.description}>
                <Text>Javier Ortiz has paid Oscar Medina 1,500 satoshis</Text>
                <View>

                </View>
                <View style={styles.bottomContainer}>
                    <FontAwesome5 size={20} style={styles.bottomContainerIcon} name={'heart'} />
                    <FontAwesome5 size={20} style={styles.bottomContainerIcon} name={'comment'} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        marginBottom: 15
    },
    image: {
        borderRadius: 100,
        width: 50,
        height: 50,
        margin: 10,
        marginLeft: 0
    },
    description: {
        flex: 1,
        paddingVertical: 5,
        paddingBottom: 20,
        borderBottomColor: "#eee",
        borderBottomWidth: 1
    },
    bottomContainer: {
        flexDirection: "row",
        marginTop: 40
    },
    bottomContainerIcon: {
        marginRight: 30
    }
});