import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function Ad() {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgBackground} resizeMode='cover' source={require('../assets/images/promotion.png')}>
                <View style={{ padding: 20 }}>
                    <Text style={styles.textDouble}>DOUBLE</Text>
                    <Text style={styles.text}>your first deposit up to</Text>
                    <Text style={styles.textMoney}>$100</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>MAKE DEPOSIT</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 150,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: "#eaeaea",
        overflow: 'hidden'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        borderRadius: 10,

    },
    textDouble: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#f2a900",
        fontStyle: "italic"
    },
    textMoney: {
        fontSize: 20,
        fontWeight: "500",
        color: "green",
        marginTop: -2
    },
    text: {
        fontSize: 18,
        color: "#9e9e9e",
        marginTop: -8,
    },
    btn: {
        backgroundColor: "#f2a900",
        width: 150,
        paddingVertical: 5,
        borderRadius: 10,
    },
    btnText: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: 'center'
    }
});