import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { Profile, Heart, ArrowLeft3, RecordCircle, Element3, Star1 } from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import { useState } from 'react';

const PaintingApp = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.dictio.id/uploads/db3342/original/1X/d240b94a6a0d96d6d8f609791577f91c90ac6583.jpg' }}
        style={[styles.imageback, { position: 'absolute' }]}
        resizeMode="cover"
      />
      <ScrollView>
        <Deskpaint />
      </ScrollView>
      <Foot />
    </View>
  );
}

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
  },
  imageback: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 145,
    height: 230,
    marginBottom: 20,
    marginLeft: 23,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  like: {
    flex: 1,
    width: 70,
    height: 70,
    backgroundColor: colors.white(),
    alignSelf: 'center',
    borderRadius: 70,
    marginHorizontal: 20,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 6,
  },
});

const Deskpaint = () => {
  const [heartColor, setHeartColor] = useState('red');
  const handlePress = () => {
    if (heartColor === 'grey') {
      setHeartColor('red');
    } else {
      setHeartColor('grey');
    }
  };
  return (
    <View style={deskpaint.containerluar}>
      <View style={deskpaint.container}>
        <View style={[styles.like, { position: 'absolute', top: 0, left: 255 }]}>


          <TouchableOpacity
            onPress={handlePress}
          //disabled={!heartColor}
          >
            <Heart color={heartColor} variant="Bold" size={30} style={[{ alignSelf: 'center' }]} />
          </TouchableOpacity>
        </View>
        <Text style={deskpaint.textdeskripsi}>
          Deskripsi
        </Text>
        <Text style={deskpaint.textjudul}>
          "The Persistence of Memory"
        </Text>
        <Text style={deskpaint.textjudul}>
          1931 : Salvador Dali
        </Text>
        <Text style={deskpaint.textmain}>
          “The Persistence of Memory” ini sendiri memiliki makna yang sangat dalam yang membuat lukisan ini menjadi sangat terkenal di seluruh dunia. Pada lukisan tersebut, tedapat beberapa simbol yang dapat kita lihat dengan kasat mata. Simbol-simbol tersebut antara lain, sebuah bukit, jam, gurun, dan semut. Lalu apakah maksud dari simbol-simbol tersebut?
          Bukit yang berada sebagai latar lukisan merupakan sebuah bukit yang berada di Cape Creus, Catalonia, sebuah tempat dimana Salvador Dali dilahirkan. Tepatnya pada kota Figueres, Catalonia, Spanyol. Menurut Dali, jam yang nampak seperti meleleh merupakan waktu yang tidak memiliki makna, “time has no meaning”. Pada saat lukisan ini dilukis, Dali merupakan orang yang sangat terinspirasi oleh teori Freudian, Sigmund Freud, dan teori hukum relativitas miliki Albert Einstein. Hal tersebut mempengaruhi gaya lukisan Dali yang menyebabkan lukisan “The Persistence of Memory” ini memiliki unsur abstrak. Lalu terdapat pula simbol gurun dan semut. Sebuah gurun merupakan suatu tempat dimana kekosongan hidup. Tidak ada yang dapat dilakukan oleh manusia yang berada di gurun kecuali berjalan menemukan jalan keluar dari gurun tersebut. Hal ini berkaitan dengan waktu dan semut. Semut di dalam lukisan tersebut diartikan menjadi sebuah kerusakan atau kehilangan. Dengan manusia berjalan tanpa penopang hidup di suatu gurun yang sangat panas, cepat atau lambat, waktu akan memakan sisa hidup manusia tersebut.
        </Text>
        <View style={deskpaint.line}></View>
        <Text style={deskpaint.textpelukis}>
          Pelukis
        </Text>
        <View style={deskpaint.containerlukis}>
          <Image
            style={deskpaint.pelukis}
            resizeMode="cover"
            source={{ uri: 'https://www.dictio.id/uploads/db3342/original/1X/b7ea2c2381f736b7f202027ed850e0e37aec1448.jpg' }}
          />
          <Text style={deskpaint.textkecil}>
            Salvador Dali adalah seorang seniman surealis terkenal yang terkenal karena lukisan-lukisan impersionis yang penuh dengan detail dan imajinasi yang luar biasa.
          </Text>
        </View>
      </View>
    </View>
  );
}

const deskpaint = StyleSheet.create({
  container: {
    marginTop: 23,
    marginLeft: 23,
    marginRight: 23,
    backgroundColor: colors.white(),
  },
  containerluar: {
    marginTop: 260,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.white(),
  },
  textdeskripsi: {
    fontFamily: fontType['nunito-medium'],
    fontSize: 28,
    color: colors.black(),
    paddingBottom: 10,
  },
  textjudul: {
    fontFamily: fontType['nunito-medium'],
    fontSize: 14,
    color: colors.black(),
  },
  textmain: {
    paddingTop: 20,
    fontFamily: fontType['nunito-medium'],
    fontSize: 16,
    color: colors.black(),
    textAlign: "justify",
  },
  textpelukis: {
    fontFamily: fontType['nunito-medium'],
    fontSize: 24,
    color: colors.black(),
    paddingBottom: 5,
  },
  textkecil: {
    fontFamily: fontType['nunito-medium'],
    fontSize: 16,
    color: colors.black(),
    paddingBottom: 5,
    textAlign: "auto",
    width: 180,
  },
  containerlukis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pelukis: {
    width: 150,
    height: 210,
    marginBottom: 20,
    marginLeft: 0,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 1,
    width: 350,
    backgroundColor: colors.black(),
    elevation: 2,
    bottom: 10,
  },
});

const Foot = () => {
  return (
    <View style={foot.container}>
      <TouchableOpacity style={foot.menu}>
        <ArrowLeft3 size={24} variant='Linear' color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={foot.menu}>
        <RecordCircle size={24} variant='Linear' color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={foot.menu}>
        <Element3 size={24} variant='Linear' color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

const foot = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderColor: '#DFD7BF',
    borderWidth: 1,
  },
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PaintingApp;




