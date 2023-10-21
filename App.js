import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Element3, Receipt21, Clock, Message, Profile, ArrowRight } from 'iconsax-react-native';
import { fontType, colors } from './src/assets/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txttitle}>Welcome !</Text>
        <Profile color={colors.black()} variant="Linear" size={26} />
      </View>
      <View style={styles.afterheader}>
        <Text style={styles.txtafterheader}>Feel the Art</Text>
        <ArrowRight color={colors.black()} variant="Linear" size={26} />
      </View>

      <ListBlog />
    </View>
  );
}


const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 15 }}>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://www.tallengestore.com/cdn/shop/products/bw96dsrw0v031_b591f1bd-91e4-46a4-8b18-8015f0b33ee0.jpg?v=1613366205',
              }}>
              <View style={itemHorizontal.cardContent}>
                {/* <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Exploring the World of Electric Cars
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View> */}
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/TATE/TATE/TATE_TATE_T05010_10-001.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                {/* <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Exploring the World of Electric Cars
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View> */}
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://lider.id/images/posts/1/2021/2021-06-14/022e3b89e9b72b6d6033a466f459b1e8_1.jpeg',
              }}>
              <View style={itemHorizontal.cardContent}>
                {/* <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Exploring the World of Electric Cars
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View> */}
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/07/B700374-2-Starry-Night-1889-scaled.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                {/* <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Baking 101: Mastering the Art of Baking
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View> */}
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Raden_Saleh_-_Diponegoro_arrest.jpg/300px-Raden_Saleh_-_Diponegoro_arrest.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                {/* <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View> */}
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://www.artnet.com/WebServices/images/ll2095353llgvkkR3CfDrCWQFHPKAD/affandi-potret-diri-(self-portrait).jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                {/* <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View> */}
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://media.mutualart.com/Images//2019_11/07/14/144815047/ddb38d1f-0936-48a2-9aef-56b751efa2ce.Jpeg',
              }}>
              <View style={itemHorizontal.cardContent}>
                {/* <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View> */}
              </View>
            </ImageBackground>
          </View>

          <View style={{ ...itemHorizontal.cardItem, marginRight: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              source={{
                uri: 'https://pbs.twimg.com/media/EBkrj-mU8AA9xyl.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                {/* <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View> */}
              </View>
            </ImageBackground>
          </View>
        </ScrollView>



        <View style={styles.listCategory}>
          <View style={styles.headercategories}>
            <Text style={styles.txtcategories}>Categories</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ ...category.item, marginLeft: 24, backgroundColor: 'gold' }}>
              <Text style={{ ...category.title, color: colors.black() }}>
                Artist
              </Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>International</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Indonesian</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Abstract</Text>
            </View>
            <View style={{ ...category.item, marginRight: 24 }}>
              <Text style={category.title}>Surealism</Text>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.columnContainer}>
              <View style={styles.column}>
                <View style={styles.small}>
                  <ImageBackground
                    style={listcategory.listgambar}
                    resizeMode="cover"
                    //dali
                    source={{
                      uri: 'https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg',
                    }}>
                  </ImageBackground>
                </View>
                <View style={styles.small}>
                  <ImageBackground
                    style={listcategory.listgambar}
                    resizeMode="cover"
                    //davinci
                    source={{
                      uri: 'https://assets-a1.kompasiana.com/items/album/2021/10/18/44fa523b2ad67f3f2bd123a39764f487-616cd7b60101906d841bf502.jpg',
                    }}>
                  </ImageBackground>
                </View>
              </View>

              <View style={styles.column}>
                <View style={styles.small}>
                  <ImageBackground
                    style={listcategory.listgambar}
                    resizeMode="cover"
                    //picasso
                    source={{
                      uri: 'https://miro.medium.com/v2/resize:fit:700/1*759mfuqRxFwqcpA1QVsnUA.jpeg',
                    }}>
                  </ImageBackground>
                </View>
                <View style={styles.small}>
                  <ImageBackground
                    style={listcategory.listgambar}
                    resizeMode="cover"
                    //van gogh
                    source={{
                      uri: 'https://www.vincentvangogh.org/images/self-portrait.jpg',
                    }}>
                  </ImageBackground>
                </View>
              </View>
            </View>
            <View style={styles.columnContainer}>
              <View style={styles.column}>
                <View style={styles.small}>
                  <ImageBackground
                    style={listcategory.listgambar}
                    resizeMode="cover"
                    //raden saleh
                    source={{
                      uri: 'https://kebudayaan.kemdikbud.go.id/bpsmpsangiran/wp-content/uploads/sites/11/2017/12/Raden-Saleh-Biografi.jpg',
                    }}>
                  </ImageBackground>
                </View>
                <View style={styles.small}>
                  <ImageBackground
                    style={listcategory.listgambar}
                    resizeMode="cover"
                    //affandi
                    source={{
                      uri: 'https://biografi.kamikamu.co.id/wp-content/uploads/sites/41/2019/10/Affandi-Koesoema.jpg',
                    }}>
                  </ImageBackground>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.small}>
                  <ImageBackground
                    style={listcategory.listgambar}
                    resizeMode="cover"
                    //ahmad sadali
                    source={{
                      uri: 'https://infogarut.id/upload/postingan/1665234728_ahmad_sadali_art_agenda.jpeg.jpg',
                    }}>
                  </ImageBackground>
                </View>
                <View style={styles.small}>
                  <ImageBackground
                    style={listcategory.listgambar}
                    resizeMode="cover"
                    //abdull
                    source={{
                      uri: 'https://miro.medium.com/v2/resize:fit:267/0*RwmTDB7VBH3mdJcd.jpg',
                    }}>
                  </ImageBackground>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};


const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 150,
  },
  cardImage: {
    width: '100%',
    height: 280,
    borderRadius: 1,
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
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },

  containerMid: {
    flex: 1,
    height: 500,
    marginHorizontal: 10,
    marginBottom: 1,
    marginTop: -6,
    //backgroundColor: '#B9C4C9',
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: Colors.white(0.5),
  },
  small: {
    width: 170,
    height: 140,
    top: 30,
    marginBottom: 20,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

const category = StyleSheet.create({
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
})

const listcategory = StyleSheet.create({
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
  }
})





