import { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import SelectedBuyCrypto from '../components/SelectedBuyCrypto'
import { CryptoContext } from '../context/crypto.context'

export default function BuyingCryptoModal() {
    const [animateModal, setanimateModal] = useState(false);
    const ctx = useContext(CryptoContext);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "position" : "height"}
            keyboardVerticalOffset={100}
        >
            <SwipeUpDownModal
                modalVisible={!!ctx.buying}
                fade={true}
                ContentModal={<SelectedBuyCrypto />}
                PressToanimate={animateModal}
                OpenModalDirection={"down"}
                onClose={() => {
                    ctx.setBuying(null)
                    setanimateModal(false);
                }}
                style={{ flex: 1 }}
            />
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({

});