import { Platform, ScrollView, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { Text, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context'

import HomeListItem from '../components/HomeListItem';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ad from '../components/Ad'
import SearchInput from '../components/SearchInput'



export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2a900" }} edges={["top"]}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchInput value='' setValue={() => { }} color={"#eaeaea"} placeholder="People and Businesses" />
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.listContainer}>
          <Ad />
          <HomeListItem />
          <HomeListItem />
          <HomeListItem />
          <HomeListItem />
          <HomeListItem />
          <HomeListItem />
          <HomeListItem />
          <HomeListItem />
          <HomeListItem />
          <HomeListItem />
          <HomeListItem />
          <HomeListItem />
        </ScrollView>
        <View style={styles.bottomOptions}>
          <TouchableHighlight style={styles.scanBTN}>
            <>
              <FontAwesome5 size={30} color={"#f2a900"} style={{ marginRight: 10 }} name={'qrcode'} />
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#f2a900" }}>Scan</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("PaySomeoneScreen")} style={styles.payOrRequestBTN}>
            <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 16 }}>Pay Or Request</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: "relative",
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFF"
  },
  listContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    paddingTop: 10,
    paddingBottom: 20
  },
  ad: {
    width: "100%",
    height: 150,
    backgroundColor: "#eee",
    border: "solid 1px",
    borderRadius: 5,
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  bottomOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderTopColor: "#eee",
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFF"
  },
  scanBTN: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f2a900",
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "35%"
  },
  payOrRequestBTN: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#f2a900",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    height: "100%"
  },
});
