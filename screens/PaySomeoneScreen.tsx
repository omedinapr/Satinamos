import { Platform, StyleSheet, Modal, Text, View, TextInput, TouchableOpacity, Keyboard, SectionList, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootTabScreenProps } from '../types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
import DATA from '../data.json'
import PeopleList from '../components/PeopleList';
import SearchInput from '../components/SearchInput'


export default function PaySomeoneScreen({ navigation }: RootTabScreenProps<'PaySomeoneScreen'>) {
  const [qrHighlightPressed, setQRHighlightPressed] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2a900" }} edges={["top"]}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          {/* Seach */}
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <FontAwesome5 onPress={() => navigation.navigate("Home")} size={20} color={"#ccc"} style={{ marginRight: 20 }} name={'chevron-left'} />
              <SearchInput value='' setValue={() => { }} placeholder="People and Businesses" />
            </View>
          </View>

          {/* Scan QR Code */}
          <TouchableHighlight
            style={styles.qrTouchHighlight}
            underlayColor={"#f2a900"}
            onShowUnderlay={() => setQRHighlightPressed(true)}
            onHideUnderlay={() => setQRHighlightPressed(false)}
            onPress={() => {
              console.log("SHIT");
            }}
          >
            <View style={styles.qrContainer}>
              <View style={qrHighlightPressed ? [styles.qrIcon, { borderColor: "#FFF" }] : styles.qrIcon}>
                <FontAwesome5 size={22} color={qrHighlightPressed ? "#FFF" : "#f2a900"} name={'qrcode'} />
              </View>
              <View style={styles.qrText}>
                <Text style={{ fontWeight: "600", color: qrHighlightPressed ? "#FFF" : "#3c3c3c" }}>Scan or show QR code</Text>
                <Text style={{ color: qrHighlightPressed ? "#FFF" : "#3c3c3c" }}>Quickly pay or request money.</Text>
              </View>
            </View>
          </TouchableHighlight>

          {/* Top People & Friends */}
          <View style={[styles.container, { paddingTop: 0 }]} >
            <SectionList
              sections={DATA}
              keyExtractor={(item, index) => item.id.toString() + "-" + index}
              renderItem={({ item }) => <PeopleList {...item} />}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.titleHeader}>{title}</Text>
              )}
              stickySectionHeadersEnabled={true}
              style={{ width: "100%", marginBottom: 140 }}
            />
          </View>
        </View>

        {/* Next Button */}
        <View style={styles.nextBTNContainer}>
          <TouchableOpacity activeOpacity={0.5} style={styles.nextBTN}>
            <Text style={styles.nextBTNText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  nextBTNContainer: {
    width: "100%",
    padding: 20,
    alignItems: "center"
  },
  nextBTN: {
    height: 50,
    width: "100%",
    paddingVertical: 15,

    backgroundColor: "#f2a900",
    borderRadius: 50
  },
  nextBTNText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  qrTouchHighlight: {
    width: "100%",
    backgroundColor: "#FFF",
    paddingHorizontal: 10
  },
  titleHeader: {
    fontWeight: "bold",
    fontSize: 24,
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#FFF"
  },
  qrContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 10
  },
  qrIcon: {
    borderWidth: 2,
    borderColor: "#f2a900",
    borderRadius: 40,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "space-around"
  },
  qrText: {
    paddingLeft: 20,
    justifyContent: "center"
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#FFF",
    padding: 20
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
