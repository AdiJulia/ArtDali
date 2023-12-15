import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, ActivityIndicator, Modal, TouchableOpacity } from 'react-native';
import { Element3, RecordCircle, ArrowRight, AddSquare } from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import { useState, useCallback, useEffect } from 'react';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import { ItemFavorite } from '../itemfavorite.js/itemfavorite';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionSheet from 'react-native-actions-sheet';

const ProfileApp = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('paint')
      .onSnapshot(querySnapshot => {
        const paints = [];
        querySnapshot.forEach(documentSnapshot => {
          paints.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setdata(paints);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('paint')
        .onSnapshot(querySnapshot => {
          const paints = [];
          querySnapshot.forEach(documentSnapshot => {
            paints.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setdata(paints);
        });
      setRefreshing(false);
    }, 1500);
  }, []);

  // const getDataBlog = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://65727de7d61ba6fcc01511a6.mockapi.io/artdaliapp/painting',
  //     );
  //     setdata(response.data);
  //     setLoading(false)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     getDataBlog()
  //     setRefreshing(false);
  //   }, 1500);
  // }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     getDataBlog();
  //   }, [])
  // );


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.txttitle}>Profile</Text>
        </View>
        <Foto />
        <Favorite />
        <View style={{ paddingVertical: 10, gap: 10 }}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            data.map((item, index) => <ItemFavorite item={item} key={index} />)
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const Foto = () => {
  return (
    <View style={foto.container}>
      <View style={foto.header}>
        <View style={foto.lil2header}>
          <View style={foto.lilheader}>
            <Image
              style={foto.image}
              source={{
                uri: 'https://www.videomeme.in/wp-content/uploads/2022/11/cartoon-face-getting-brighter.jpg',
              }}
            />
          </View>
        </View>
        <Text style={foto.headerText}>Adi Julia Saputra</Text>
        <Text style={foto.headerText1}></Text>
        <View style={foto.line}></View>
      </View>
    </View>
  );
};

const foto = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white(),
    height: 180,
    paddingHorizontal: 0,
    marginBottom: 15,
  },
  lilheader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white(),
    borderRadius: 100,
    height: 108,
    width: 108,
    paddingHorizontal: 0,
  },
  lil2header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey(),
    borderRadius: 100,
    height: 112,
    width: 112,
    paddingHorizontal: 0,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 0.5,
    width: 350,
    backgroundColor: colors.black(),
    elevation: 3,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: fontType['cinzel-standart'],
    marginTop: 10,
  },
  headerText1: {
    fontSize: 14,
    color: 'black',
    marginTop: 10, // Memberi jarak antara gambar dan teks
    marginBottom: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
});

const Favorite = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.afterheader}>
        <Text style={styles.txtafterheader}>Favorite</Text>
        <TouchableOpacity>
          <AddSquare style={favorite.addbutton} onPress={() => navigation.navigate("AddFavorite")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const favorite = StyleSheet.create({
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnContainerSmall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    right: 23,
  },
  addbutton: {
    variant: "Linear",
    size: 26,
    color: colors.black(),
    marginRight: 16,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  txttitle: {
    fontSize: 28,
    fontFamily: fontType['cinzel-black'],
    color: colors.black(),
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 5,
  },
  afterheader: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  txtafterheader: {
    fontSize: 22,
    fontFamily: fontType['cinzel-bold'],
    color: colors.black(),
  },
});

export default ProfileApp;

