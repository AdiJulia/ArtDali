import React from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, Button, Modal, TouchableOpacity } from 'react-native';
import { Profile, ArrowRight } from 'iconsax-react-native';
import { fontType, colors } from './src/assets/theme';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txttitle}>Welcome !!</Text>
        <Profile color={colors.black()} variant="Linear" size={26} />
      </View>
      <View style={styles.afterheader}>
        <Text style={styles.txtafterheader}>Feel the Art</Text>
        <ArrowRight color={colors.black()} variant="Linear" size={26} />
      </View>

      <ScrollView>
      <ListPaint />
      <ListCategory />
      <ListArtist />
      </ScrollView>
    </View>
  );
}

const ListPaint = () => {
  return (
      <View style={styles.ListPaint}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 15 }}>
          <View style={{ ...listpainstyle.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={listpainstyle.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://www.tallengestore.com/cdn/shop/products/bw96dsrw0v031_b591f1bd-91e4-46a4-8b18-8015f0b33ee0.jpg?v=1613366205',
              }}>
              <View style={listpainstyle.cardContent}>
              </View>
            </ImageBackground>
          </View>
          <View style={listpainstyle.cardItem}>
            <ImageBackground
              style={listpainstyle.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/TATE/TATE/TATE_TATE_T05010_10-001.jpg',
              }}>
              <View style={listpainstyle.cardContent}>
              </View>
            </ImageBackground>
          </View>
          <View style={listpainstyle.cardItem}>
            <ImageBackground
              style={listpainstyle.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://lider.id/images/posts/1/2021/2021-06-14/022e3b89e9b72b6d6033a466f459b1e8_1.jpeg',
              }}>
              <View style={listpainstyle.cardContent}>
              </View>
            </ImageBackground>
          </View>
          <View style={listpainstyle.cardItem}>
            <ImageBackground
              style={listpainstyle.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/07/B700374-2-Starry-Night-1889-scaled.jpg',
              }}>
              <View style={listpainstyle.cardContent}>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...listpainstyle.cardItem }}>
            <ImageBackground
              style={listpainstyle.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Raden_Saleh_-_Diponegoro_arrest.jpg/300px-Raden_Saleh_-_Diponegoro_arrest.jpg',
              }}>
              <View style={listpainstyle.cardContent}>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...listpainstyle.cardItem }}>
            <ImageBackground
              style={listpainstyle.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://www.artnet.com/WebServices/images/ll2095353llgvkkR3CfDrCWQFHPKAD/affandi-potret-diri-(self-portrait).jpg',
              }}>
              <View style={listpainstyle.cardContent}>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...listpainstyle.cardItem}}>
            <ImageBackground
              style={listpainstyle.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://media.mutualart.com/Images//2019_11/07/14/144815047/ddb38d1f-0936-48a2-9aef-56b751efa2ce.Jpeg',
              }}>
              <View style={listpainstyle.cardContent}>                
              </View>
            </ImageBackground>
          </View>

          <View style={{ ...listpainstyle.cardItem, marginRight: 24 }}>
            <ImageBackground
              style={listpainstyle.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://pbs.twimg.com/media/EBkrj-mU8AA9xyl.jpg',
              }}>
              <View style={listpainstyle.cardContent}>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
  );
};

const listpainstyle = StyleSheet.create({
  cardItem: {
    width: 150,
  },
  cardImage: {
    width: '100%',
    height: 220,
  },
});

//Penerapan Props
const CategoryItems = ({title, style, item, label,  listcategorystylem, color}) => {
  return (
    <View style={[listcategorystyle.item]}>
      <Text style={[listcategorystyle.title]}>{label}</Text>
    </View>
  );
};

//Penerapan Props
const ListCategory = () => {
  return(
      <View style={styles.listcategorystyle}>
          <View style={styles.headercategories}>
            <Text style={styles.txtcategories}>Categories</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginLeft: 20}}>
              <CategoryItems label="Artist"/>
            </View>
            <CategoryItems label="International"/>
            <CategoryItems label="Indonesian"/>
            <CategoryItems label="Abstract"/>
            <View style={{marginRight: 20 }}>
              <CategoryItems label="Surealism" />
            </View>
          </ScrollView>
      </View>
  );
};


const listcategorystyle = StyleSheet.create({
  containersecond: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containermain: {
    flex: 1,
    height: 500,
    marginHorizontal: 10,
    marginBottom: 1,
    marginTop: 1,
  },
  containerlist: {
    width: '100%',
    height: '100%',
    marginTop: 40,
    marginBottom: 40,
    marginRight: 10,
    top: 20,
    justifyContent: 'center',
  },
  listgambar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(),
    marginHorizontal: 5
  },
  title: {
    fontFamily: fontType['nunito-medium'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.white(),
  },
});


// penerapan state
const ListArtist = () => {
  const [artist, setartist] = useState(true);
  const [showpopup, setshowpopup] = useState(false);
  const [showpopupdali, setshowpopupdali] = useState(false);
  const [showpopupdavinci, setshowpopupdavinci] = useState(false);
  const [showpopupraden, setshowpopupraden] = useState(false);
  const [showpopupaffandi, setshowpopupaffandi] = useState(false);

  const togglepopupdali = () => {
    setshowpopupdali(!showpopupdali);
  };

  const togglepopupdavinci = () => {
    setshowpopupdavinci(!showpopupdavinci);
  };

  const togglepopupraden = () => {
    setshowpopupraden(!showpopupraden);
  };

  const togglepopupaffandi = () => {
    setshowpopupaffandi(!showpopupaffandi);
  };

  const showdesk = () => {
    setartist(false);
    togglepopup();
  };

  const resetdeskdali = () => {
    setartist(true);
    togglepopupdali();
  };

  const resetdeskdavinci = () => {
    setartist(true);
    togglepopupdavinci();
  };

  const resetdeskraden = () => {
    setartist(true);
    togglepopupraden();
  };

  const resetdeskaffandi = () => {
    setartist(true);
    togglepopupaffandi();
  };

  

  return(
    <View style={styles.ListPaint}>
        <ScrollView>
            <View style={listartiststyle.columnContainer}> 
              <View>
                {/* Dali */}
                <View style={listartiststyle.small}>
                  <ImageBackground
                    style={listartiststyle.listgambar}
                    resizeMode="cover"
                    
                    source={{
                      uri: 'https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg',
                    }}>          
                  </ImageBackground>
                  <TouchableOpacity
                        style={popup.buttonstyle}
                        onPress={() => {
                          setartist(false);
                          togglepopupdali();
                        }}
                        disabled={!artist}
                      >
                        <Text style={popup.buttonText}>
                          {artist ? 'Salvador Dali' : 'Salvador Dali'}
                        </Text>
                  </TouchableOpacity>
                  <Modal
                    transparent={false}
                    visible={showpopupdali}
                    animationType="slide"
                  >
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={popup.buttonstyle}
                        onPress={resetdeskdali}
                      >
                        <Text style={popup.buttonText}>
                          Close Description
                        </Text>
                      </TouchableOpacity>
                        <Text>
                          Salvador Dali
                        </Text>
                      </View>
                    </View>
                  </Modal>
                </View>

                {/* Affandi */}
                <View style={listartiststyle.small}>
                  <ImageBackground
                    style={listartiststyle.listgambar}
                    resizeMode="cover"
                    source={{
                      uri: 'https://biografi.kamikamu.co.id/wp-content/uploads/sites/41/2019/10/Affandi-Koesoema.jpg',
                    }}>
                  </ImageBackground>
                  <TouchableOpacity
                        style={popup.buttonstyle}
                        onPress={() => {
                          setartist(false);
                          togglepopupaffandi();
                        }}
                        disabled={!artist}
                      >
                        <Text style={popup.buttonText}>
                          {artist ? 'Affandi' : 'Affandi'}
                        </Text>
                  </TouchableOpacity>
                  <Modal
                    transparent={false}
                    visible={showpopupaffandi}
                    animationType="slide"
                  >
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={popup.buttonstyle}
                        onPress={resetdeskaffandi}
                      >
                        <Text style={popup.buttonText}>
                          Close Description
                        </Text>
                      </TouchableOpacity>
                        <Text>
                          Affandi
                        </Text>
                      </View>
                    </View>
                  </Modal>
                </View>
                </View>
              
              <View style={listartiststyle.column}>
                {/* Da Vinci */}
                <View style={listartiststyle.small}>
                  <ImageBackground
                    style={listartiststyle.listgambar}
                    resizeMode="cover"
                    //davinci
                    source={{
                      uri: 'https://assets-a1.kompasiana.com/items/album/2021/10/18/44fa523b2ad67f3f2bd123a39764f487-616cd7b60101906d841bf502.jpg',
                    }}>
                  </ImageBackground>
                  <TouchableOpacity
                        style={popup.buttonstyle}
                        onPress={() => {
                          setartist(false);
                          togglepopupdavinci();
                        }}
                        disabled={!artist}
                      >
                        <Text style={popup.buttonText}>
                          {artist ? 'Da Vinci' : 'Da Vinci'}
                        </Text>
                  </TouchableOpacity>
                  <Modal
                    transparent={false}
                    visible={showpopupdavinci}
                    animationType="slide"
                  >
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={popup.buttonstyle}
                        onPress={resetdeskdavinci}
                      >
                        <Text style={popup.buttonText}>
                          Close Description
                        </Text>
                      </TouchableOpacity>
                        <Text>
                          Leonardo Da Vinci
                        </Text>
                      </View>
                    </View>
                  </Modal>
                </View>

                {/* Raden Saleh */}
                <View style={listartiststyle.small}>
                  <ImageBackground
                    style={listartiststyle.listgambar}
                    resizeMode="cover"     
                    source={{
                      uri: 'https://kebudayaan.kemdikbud.go.id/bpsmpsangiran/wp-content/uploads/sites/11/2017/12/Raden-Saleh-Biografi.jpg',
                    }}>
                  </ImageBackground>
                  <TouchableOpacity
                        style={popup.buttonstyle}
                        onPress={() => {
                          setartist(false);
                          togglepopupraden();
                        }}
                        disabled={!artist}
                      >
                        <Text style={popup.buttonText}>
                          {artist ? 'Raden Saleh' : 'Raden Saleh'}
                        </Text>
                  </TouchableOpacity>
                  <Modal
                    transparent={false}
                    visible={showpopupraden}
                    animationType="slide"
                  >
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={popup.buttonstyle}
                        onPress={resetdeskraden}
                      >
                        <Text style={popup.buttonText}>
                          Close Description
                        </Text>
                      </TouchableOpacity>
                        <Text>
                          Raden Saleh
                        </Text>
                      </View>
                    </View>
                  </Modal>
                </View>

              </View>
            </View>
        </ScrollView>
    </View>
  );
};

const listartiststyle = StyleSheet.create({
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
     right:23,
  },
  small: {
    width: 160,
    height: 180,
    top: 30,
    marginBottom: 50,
    marginLeft: 23,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  listgambar: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
});

const popup = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.grey(),
    borderRadius: 10,
    padding: 20,
  },
  imageInPopup: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonstyle: {
    backgroundColor: 'grey',
    padding: 10,
    textAlign: 'center',
    textDecorationColor: 'white',
  },
  buttonText: {
    fontFamily: fontType['nunito-medium'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.white(),
    textAlign: 'center',
  },
});

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
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    marginTop: 10,
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
  headercategories: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  txttitle: {
    fontSize: 28,
    fontFamily: fontType['cinzel-black'],
    color: colors.black(),
  },
  txtafterheader: {
    fontSize: 22,
    fontFamily: fontType['cinzel-bold'],
    color: colors.black(),
  },
  txtcategories: {
    fontSize: 22,
    fontFamily: fontType['cinzel-medium'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  ListPaint: {
    paddingVertical: 10,
    gap: 10,
  },
});



