import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View, Keyboard, TouchableOpacity, Platform } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface IProps {
    placeholder?: string
    color?: string
    width?: string
    icon?: string
    hideIcon?: boolean
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}
export default function SearchInput(props: IProps) {

    return (
        <View style={[styles.searchInputContainer, { borderColor: props.color ? props.color : "#f2a900" }]}>
            <FontAwesome5 size={20} color={"#ccc"} style={{ marginRight: 20 }} name={'search'} />
            <TextInput defaultValue={props.value} onChangeText={(value) => props.setValue(value)} style={styles.searchInput} placeholder={props.placeholder} placeholderTextColor={Platform.OS == "android" ? "#eaeaea" : "gray"} />
            {
                props.value.length > 0 &&
                <TouchableOpacity activeOpacity={0.4} onPress={() => {
                    props.setValue("");
                    Keyboard.dismiss();
                }}>
                    {
                        !props.hideIcon &&
                        <FontAwesome5 size={20} color={"#ccc"} style={{ marginLeft: 20 }} name={props.icon ? props.icon : 'times-circle'} />
                    }
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "#FFF",
        padding: 20
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        borderWidth: 2,
        borderRadius: 50,
        height: 50
    },
    searchInput: {
        flex: 1,
    }
});