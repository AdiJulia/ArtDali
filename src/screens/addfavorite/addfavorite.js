import React from 'react';
import { TextInput, ScrollView, StyleSheet, Text, View, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { Element3, RecordCircle, ArrowLeft, SearchNormal1 } from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

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

  return (
    <View style={addstyle.container}>
      <View style={addstyle.header}>
        <View style={addstyle.borderDashed}>
          <TextInput
            placeholder="Title"
            //value={blogData.title}
            onChangeText={(text) => handleChange("title", text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={addstyle.title}
          />
        </View>
        <View style={addstyle.borderDashed}>
          <TextInput
            placeholder="Image"
            //value={blogData.title}
            onChangeText={(image) => handleChange("title", image)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={addstyle.title}
          />
        </View>
      </View>
      <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.button} onPress={() => { }}>
            <Text style={styles.buttonLabel}>Add</Text>
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
  buttonLabel: {
    fontSize: 16,
    fontFamily: fontType["inter-inter"],
    color: colors.white(),
  },
});

export default AddFavorite;



