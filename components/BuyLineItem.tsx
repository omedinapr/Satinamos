import { StyleSheet, Image, TouchableOpacity, Text, View, Modal } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useContext, useState } from 'react';

import { ICoin } from '../screens/Buy';
import { CryptoContext } from '../context/crypto.context'
import * as utils from '../utils'

const colors = {
    green: "#43a047",
    red: "#e53935",
    yellow: "#f2a900"
}

interface IPriceArrowDisplay {
    price: number
    title: string
}

function PriceArrowDisplay({ price, title }: IPriceArrowDisplay) {
    return (
        <View style={styles.cryptoPriceChange}>
            <Text style={{ marginRight: 5, fontWeight: "bold", fontSize: 12 }}>{title}:</Text>
            <FontAwesome5 size={10} color={price > 0 ? colors.green : colors.red} style={{ marginRight: 5 }} name={price > 0 ? 'arrow-up' : 'arrow-down'} />
            <Text>{price}</Text>
        </View>
    )
}

export default function BuyLineItem({ data, index }: { data: ICoin, index: number }) {
    const ctx = useContext(CryptoContext);
    return (
        <TouchableOpacity onPress={() => ctx.setBuying(data)}>
            <View style={[styles.container, { backgroundColor: index % 2 == 1 ? "#eaeaea" : "#FFF" }]}>
                <Image source={{ uri: data.icon }} style={{ width: 40, height: 40 }} />
                <View style={{ paddingLeft: 20, flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.header}>{data.name.length > 18 ? data.name.substring(0, 18) + "..." : data.name}</Text>
                        <Text style={[styles.cryptoPrice, { color: data.priceChange1h < 0 ? colors.red : colors.green }]}>${utils.formatPrice(data.price)}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <PriceArrowDisplay title="1H" price={data.priceChange1h} />
                        <PriceArrowDisplay title="1D" price={data.priceChange1d} />
                        <PriceArrowDisplay title="1W" price={data.priceChange1w} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 10,
        borderRadius: 10,
        padding: 20
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left"
    },
    cryptoPrice: {
        fontSize: 18,
        fontWeight: "500"
    },
    cryptoPriceChange: {
        flexDirection: "row",
        alignItems: "center"
    }
});