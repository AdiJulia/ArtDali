import React from 'react';
import { TextInput, ScrollView, StyleSheet, Text, View, ImageBackground, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Element3, RecordCircle, ArrowLeft, SearchNormal1 } from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

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
  const [data, setdata] = useState({
    title: "",
  });
  const handleChange = (key, value) => {
    setdata({
      ...data,
      [key]: value,
    });
  };

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    setLoading(true);
    try {
      await axios.post('https://65727de7d61ba6fcc01511a6.mockapi.io/artdaliapp/painting', {
        title: data.title,
        image,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('Profile');
    } catch (e) {
      console.log(e);
    }
  };
  const [image, setImage] = useState(null);

  

  return (
    <View style={addstyle.container}>
      <View style={addstyle.header}>
        <View style={addstyle.borderDashed}>
          <TextInput
            placeholder="Title"
            value={data.title}
            onChangeText={text => handleChange('title', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={addstyle.title}
          />
        </View>
        <View style={addstyle.borderDashed}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={(text) => setImage(text)}
            placeholderTextColor={colors.grey(0.6)}

            style={addstyle.title}
          />
        </View>
      </View>
      <View style={styles.bottomBar}>
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={colors.blue()} />
          </View>
        )}
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttontext}>Add</Text>
        </TouchableOpacity>
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
    height: 170,
    paddingHorizontal: 0,
    marginBottom: 15,
    marginTop: -10,
  },
  borderDashed: {
    borderStyle: "dashed",
    marginTop: 20,
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
    marginBottom: 10,
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
  floatingButton: {
    backgroundColor: colors.blue(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
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



