import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { Element3, RecordCircle, ArrowRight, AddSquare } from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

const ProfileApp = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.txttitle}>Profile</Text>
        </View>
        <Foto />
        <Favorite />
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
          <AddSquare style={favorite.addbutton} onPress={() => navigation.navigate("addfavorite")}/>
        </TouchableOpacity>
      </View>
      <View style={favorite.columnContainer}>
        <View style={favorite.small}>
          <Image
            style={favorite.listgambar}
            resizeMode="cover"
            source={{
              uri: 'https://lider.id/images/posts/1/2021/2021-06-14/022e3b89e9b72b6d6033a466f459b1e8_1.jpeg',
            }} />
        </View>
        <View>
          <View style={favorite.small2}>
            <Image
              style={favorite.listgambar}
              resizeMode="cover"
              source={{
                uri: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/07/B700374-2-Starry-Night-1889-scaled.jpg',
              }} />
          </View>
          <View style={favorite.columnContainerSmall}>
            <View style={favorite.small3}>
              <Image
                style={favorite.listgambar}
                resizeMode="cover"
                source={{
                  uri: 'https://media.mutualart.com/Images//2019_11/07/14/144815047/ddb38d1f-0936-48a2-9aef-56b751efa2ce.Jpeg',
                }} />
            </View>
            <View style={favorite.small4}>
              <Image
                style={favorite.listgambar}
                resizeMode="cover"
                source={{
                  uri: 'https://pbs.twimg.com/media/EBkrj-mU8AA9xyl.jpg',
                }} />
            </View>
          </View>
        </View>
      </View>

      <View style={favorite.columnContainer}>
        <View style={favorite.small0}>
          <Image
            style={favorite.listgambar}
            resizeMode="cover"
            source={{
              uri: 'https://www.artnet.com/WebServices/images/ll2095353llgvkkR3CfDrCWQFHPKAD/affandi-potret-diri-(self-portrait).jpg',
            }} />
        </View>
        <View>
          <View style={favorite.small2}>
            <Image
              style={favorite.listgambar}
              resizeMode="cover"
              source={{
                uri: 'https://www.tallengestore.com/cdn/shop/products/bw96dsrw0v031_b591f1bd-91e4-46a4-8b18-8015f0b33ee0.jpg?v=1613366205',
              }} />
          </View>
          <View style={favorite.small2}>
            <Image
              style={favorite.listgambar}
              resizeMode="cover"
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Raden_Saleh_-_Diponegoro_arrest.jpg/300px-Raden_Saleh_-_Diponegoro_arrest.jpg',
              }} />
          </View>
        </View>
      </View>
      <View style={favorite.small5}>
        <Image
          style={favorite.listgambar}
          resizeMode="cover"
          source={{
            uri: 'https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/TATE/TATE/TATE_TATE_T05010_10-001.jpg',
          }} />
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
  small0: {
    width: 145,
    height: 230,
    marginBottom: 20,
    marginLeft: 23,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  small: {
    width: 145,
    height: 210,
    marginBottom: 20,
    marginLeft: 23,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  small2: {
    width: 190,
    height: 110,
    marginBottom: 10,
    marginRight: 23,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  small3: {
    width: 90,
    height: 90,
    marginBottom: 20,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  small4: {
    width: 90,
    height: 90,
    marginBottom: 20,
    marginRight: 23,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  small5: {
    width: 345,
    height: 210,
    marginBottom: 20,
    marginRight: 23,
    marginLeft: 23,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  listgambar: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
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
  pic: { width: 100, height: 100, borderRadius: 15 },
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform: 'capitalize'
  },
  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  sum: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.5),
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
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

