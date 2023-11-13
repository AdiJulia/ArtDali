import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ArrowLeft, Like1, Receipt21, Message, Share, More} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {BlogList} from '../../../data';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../../theme';


const artisapp = ({route}) => {
  const {blogId} = route.params;
  const selectedBlog = BlogList.find(blog => blog.id === blogId);
  const navigation = useNavigation();
  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
    }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft
            color={colors.grey(0.6)}
            variant="Linear"
            size={24}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 54,
        }}>
        <FastImage
          style={styles.image}
          source={{
            uri: selectedBlog.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
        </FastImage>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
        </View>
        <Text style={styles.title}>{selectedBlog.title}</Text>
        <Text style={styles.content}>{selectedBlog.content}</Text>
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: colors.white(),
    paddingVertical: 14,
    paddingHorizontal: 60,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 200,
    width: 'auto',
    borderRadius: 15,
  },
  info: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  category: {
    color: colors.blue(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  date: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 10,
  },
  content: {
    color: colors.grey(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
    lineHeight: 20,
    marginTop: 15,
  },
});


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: colors.white(),
//     },
//     txttitle: {
//       fontSize: 28,
//       fontFamily: fontType['cinzel-black'],
//       color: colors.black(),
//       marginTop: 20,
//       textAlign: 'center',
//     },
//     imageback: {
//       width: '100%',
//       height: 300,
//       justifyContent: 'center',
//       backgroundColor: 'black',
//     },
//     image: {
//       width: 145,
//       height: 230,
//       marginBottom: 20,
//       marginLeft: 23,
//       borderRadius: 15,
//       justifyContent: 'center',
//       backgroundColor: 'black',
//     },
//     like: {
//       flex: 1,
//       width: 70,
//       height: 70,
//       backgroundColor: colors.white(),
//       alignSelf: 'center',
//       borderRadius: 70,
//       marginHorizontal: 20,
//       marginVertical: 15,
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'row',
//       elevation: 6,
//     },
//   });

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



export default artisapp;