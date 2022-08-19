import { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Keyboard, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { CryptoContext } from '../context/crypto.context'
import * as utils from '../utils'

export default function SelectedBuyCrypto() {
    const { buying: data } = useContext(CryptoContext);
    if (!data) return <></>

    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                {/* Header Name */}
                <View style={styles.headerContainer}>
                    <Image source={{ uri: data.icon }} style={{ width: 40, height: 40 }} />
                    <Text style={styles.headerName}>{data.name}</Text>
                </View>

                {/*
                TODO: Add arrow
                TODO: Add color changing depending on what progress they select
                */}
                {/* Price */}
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>${utils.formatPrice(data.price)}</Text>
                </View>

                {/* Graph */}
                <View style={styles.graph}></View>

                {/* Show Time Progress */}
                <View style={styles.progressContainer}>
                    <View style={[styles.progressOption, { backgroundColor: "#f2a900" }]}>
                        <Text style={[styles.progressOptionText, { color: "#3c3c3c" }]}>1H</Text>
                    </View>
                    <View style={styles.progressOption}>
                        <Text style={styles.progressOptionText}>1D</Text>
                    </View>
                    <View style={styles.progressOption}>
                        <Text style={styles.progressOptionText}>1W</Text>
                    </View>
                </View>

                {/* Buy Quantity */}
                <View style={styles.keyboardContainer}>
                    <TextInput style={styles.quantityInput} keyboardType="numeric" />
                    <Text>{data.symbol}</Text>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    keyboardContainer: {
        flexDirection: "row",
        width: "100%",
    },
    quantityInput: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#eaeaea",
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        width: "100%"
    },
    progressContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 20
    },
    progressOption: {
        backgroundColor: "#eaeaea",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5
    },
    progressOptionText: {
        color: "#CCC",
        fontWeight: "500"
    },
    priceContainer: {
        width: "100%",
    },
    priceText: {
        textAlign: "right",
        fontWeight: "bold",
        fontSize: 20
    },
    container: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    boxContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#eaeaea",
        // borderBottomWidth: 0,
        // paddingBottom: 10
    },
    headerName: {
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 10
    },
    graph: {
        width: "100%",
        height: 150,
        backgroundColor: "#eaeaea",
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 10,
        marginTop: 20
    }
});