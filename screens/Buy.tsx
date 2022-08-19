import { FlatList, StyleSheet, Text, View, TextInput, ImageBackground, Button } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import BuyLineItem from '../components/BuyLineItem'
import BuyLineItemLoading from '../components/BuyLineItemLoading'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import SearchInput from '../components/SearchInput'
import { ScrollView } from 'moti';
import BuyingCryptoModal from '../components/BuyingCryptoModal'


export interface ICoin {
  id: string
  icon: string
  name: string
  symbol: string
  rank: number
  price: number
  priceBtc: number
  volume: number
  marketCap: number
  availableSupply: number
  totalSupply: number
  priceChange1h: number
  priceChange1d: number
  priceChange1w: number
  websiteUrl: string
  twitterUrl: string
  exp: string[]
}

export default function BuyScreen() {
  const amount = 10;
  const maxAmount = 1000
  const [prices, setPrices] = useState<ICoin[]>([]);
  const [currentCoinIndex, setCurrentCoinIndex] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCoins, setFilteredCoins] = useState<ICoin[]>([]);


  function fetchPrices(fresh: boolean = false) {
    console.log("FETCHING");
    const url = `https://api.coinstats.app/public/v1/coins?skip=${fresh ? 0 : currentCoinIndex * amount}&limit=${amount}`;
    setTimeout(() => {
      axios.get(url)
        .then((result) => {
          if (fresh) {
            setPrices((prev) => result.data.coins);
          } else {
            setPrices((prev) => [...prev, ...result.data.coins]);
          }
          setCurrentCoinIndex((prev) => prev + 1)
        })
        .catch((err) => {
          console.log(err);
        })
    }, 2000)
  }

  useEffect(() => {
    if (!search.length) {
      setFilteredCoins(prices);
    } else {
      setFilteredCoins(prices.filter(p => p.name.toLowerCase().includes(search.toLowerCase())))
    }
  }, [prices, search])

  useEffect(() => {
    setPrices([]);
    setCurrentCoinIndex(0)
    fetchPrices()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2a900" }} edges={["top"]}>
      <View style={{ flex: 1 }}>

        {/* Title */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Buy Crypto {isFetching.toString()}</Text>
        </View>

        <View style={styles.mainContainer}>

          {/* Search */}
          <View style={styles.searchContainer}>
            <SearchInput value={search} setValue={setSearch} color={"#eaeaea"} placeholder="Search for Crypto" />
          </View>

          {/* List */}
          {
            filteredCoins.length > 0 &&
            <>
              {/* Modal */}
              <BuyingCryptoModal />


              <View style={styles.container}>
                {/* List */}
                <FlatList
                  data={filteredCoins}
                  renderItem={({ item, index }) => <BuyLineItem data={item} index={index} />}
                  style={{ width: "100%" }}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  initialNumToRender={5}
                  onRefresh={() => {
                    setPrices([]);
                    fetchPrices(true)
                  }}
                  refreshing={false}
                  onEndReached={() => {
                    // Prevent fetching while filtering
                    if (search.length) { return }

                    // Fetch more data
                    if (currentCoinIndex * amount < maxAmount) {
                      fetchPrices();
                    }
                  }}
                />
              </View>
            </>
          }

          {/* No Crypto Found */}
          {
            filteredCoins.length <= 0 && search.length > 0 &&
            <View style={styles.nothingFound}>
              <ImageBackground source={require("../assets/images/no_crypto_found.png")} resizeMode={"contain"} style={styles.nothingFoundImage} >
                <Text style={styles.nothingFoundText}>No Crypto Found</Text>
              </ImageBackground>
            </View>
          }

          {/* Loading */}
          {
            prices.length <= 0 && search.length <= 0 &&
            <ScrollView style={{ marginTop: 20 }}>
              {
                [...Array(amount)].map((_, i) => {
                  return <BuyLineItemLoading key={"loadingItem-" + i} useBackground={i % 2 == 1} />
                })
              }
            </ScrollView>
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 0,
    paddingTop: 20,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40
  },
  headerContainer: {
    width: "100%",
    paddingVertical: 20,
    paddingBottom: 60,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20
    // color: "#f2a900"
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  searchContainer: {
    width: "100%",
    height: 50,
    marginTop: 10,
    paddingHorizontal: 20
  },
  nothingFound: {
    height: 500,
    justifyContent: "center",
    alignItems: "center"
  },
  nothingFoundText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#CCC",
    textAlign: "center",
    marginTop: 40
  },
  nothingFoundImage: {
    flex: 1,
    width: "100%",
    alignContent: "center"
  },
  loading: {

  }
});
