import { ScrollView, StyleSheet, Image } from 'react-native';
import { Text, View } from 'react-native';

interface IProps {
    id: number
    first_name: string
    last_name: string
    email: string
    avatar: string
    username: string
}

export default function PeopleList(props: IProps) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.avatar }} style={styles.images} />
            <View style={styles.info}>
                <Text style={styles.name}>{props.first_name} {props.last_name}</Text>
                <Text style={styles.handle} >@{props.last_name + props.id}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        marginBottom: 20
    },
    images: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#FFF",
    },
    info: {
        flex: 1,
        paddingLeft: 10
    },
    name: {
        fontSize: 16,
        fontWeight: "500"
    },
    handle: {
        fontSize: 14,
        color: "#8c8c8c"
    }
});