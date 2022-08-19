import { StyleSheet, Image } from 'react-native';
import { Text, View } from 'react-native';
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'

export default function BuyLineItemLoading({ useBackground }: { useBackground: boolean }) {
    return (
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
            <MotiView
                transition={{ type: 'spring' }}
                style={styles.container}
                animate={{ backgroundColor: useBackground ? "#eaeaea" : "#FFF" }}
            >
                <Skeleton colorMode='light' width={40} height={40} radius="round" />
                <View style={{ paddingLeft: 20, flex: 1 }}>
                    <View style={{ justifyContent: "space-between" }}>
                        <Skeleton colorMode='light' width={"100%"} height={20} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
                        <Skeleton colorMode='light' width={60} height={19} />
                        <Skeleton colorMode='light' width={60} height={19} />
                        <Skeleton colorMode='light' width={60} height={19} />
                    </View>
                </View>
            </MotiView >
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 10,
        borderRadius: 10,
        padding: 20
    }
});