import React from 'react';
import { TextInput, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Add, AddSquare, ArrowLeft, SearchNormal1 } from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const AddFavorite = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containertitle}>
          <ArrowLeft color='black' size={24} onPress={() => navigation.navigate("Profile")} />
          <Text style={styles.txttitle}>AddFavorite</Text>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.txtketerangan}>Add the painting you want </Text>
        <AddArea />
      </ScrollView>
    </View>
  );
}

const AddArea = () => {
  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1080,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpload = async () => {
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const reference = storage().ref(`paint/${filename}`);

    setLoading(true);
    try {
      await reference.putFile(image);
      const url = await reference.getDownloadURL();
      await firestore().collection('paint').add({
        title: blogData.title,
        image: url,
      });
      setLoading(false);
      console.log('Blog added!');
      navigation.navigate('Profile');
    } catch (error) {
      console.log(error);
    }
  };

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const [blogData, setBlogData] = useState({
    title: '',
    image: '',
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };

  return (
    <View style={addstyle.container}>
      <View style={addstyle.header}>
        <View style={addstyle.borderDashed}>
          <TextInput
            placeholder="Title"
            value={blogData.title}
            onChangeText={text => handleChange('title', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={addstyle.title}
          />
        </View>
        {image ? (
          <View style={{ position: 'relative' }}>
            <FastImage
              style={{ width: '100%', height: 127, borderRadius: 5 }}
              source={{
                uri: image,
                headers: { Authorization: 'someAuthToken' },
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />

            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -100,
                backgroundColor: colors.blue(),
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color={colors.white()}
                style={{ transform: [{ rotate: '45deg' }] }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                addstyle.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 350
                },
              ]}>
              <AddSquare color={colors.grey(0.6)} variant="Linear" size={42} />
              <Text
                style={{
                  fontFamily: fontType['noto-regular'],
                  fontSize: 12,
                  color: colors.grey(0.6),
                }}>
                Select Paint
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttontext}>Add</Text>
        </TouchableOpacity>
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={colors.blue()} />
          </View>
        )}
      </View>
    </View>
  );
};

const addstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white(),
    height: 250,
    paddingHorizontal: 0,
    marginBottom: 15,
    marginTop: -30,
  },
  borderDashed: {
    borderStyle: "dashed",
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.grey(0.4),
  },
  title: {
    fontSize: 16,
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.black(),
    padding: 0,
    width: 330,
  },
  content: {
    fontSize: 12,
    fontFamily: fontType["Pjs-Regular"],
    color: colors.black(),
    padding: 0,
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  containertitle: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 72,
    elevation: 8,
    color: colors.black(),
  },
  txttitle: {
    fontSize: 24,
    fontFamily: fontType['nunito-medium'],
    color: colors.black(),
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 5,
    marginLeft: 23,
  },
  txtketerangan: {
    fontSize: 16,
    fontFamily: fontType['inter-inter'],
    color: colors.black(),
    textAlign: 'left',
    marginBottom: 30,
    marginLeft: 23,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 0.5,
    width: 350,
    backgroundColor: colors.black(),
    elevation: 3,
    marginBottom: 10,
    marginLeft: 20,
  },
  bottomBar: {
    backgroundColor: colors.white(),
    alignItems: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.grey(),
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    fontSize: 16,
    fontFamily: fontType["inter-inter"],
    color: colors.white(),
  },
});

export default AddFavorite;



