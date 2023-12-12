import React, { useRef } from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground, Modal, TouchableOpacity, Image, Animated } from 'react-native';
import { Profile, ArrowRight, ArrowLeft3, RecordCircle, Element3 } from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={[styles.containeranimasi]}>
        <Animated.View style={[{ transform: [{ translateY: headerY }] }]}>
          <View style={[styles.header]}>
            <Text style={styles.txttitle}>Welcome !!</Text>
            <Profile color={colors.black()} variant="Linear" size={26} />
          </View>
          <View style={[styles.afterheader]}>
            <Text style={styles.txtafterheader}>Feel the Art</Text>
            <ArrowRight color={colors.black()} variant="Linear" size={26} />
          </View>
        </Animated.View>
      </View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        contentContainerStyle={{ paddingTop: 142 }}>
        <ListPaint />
        <ListCategory />
        <ListArtist />
      </Animated.ScrollView>
      {/* <Foot /> */}
    </View>
  );
}

const scrollY = useRef(new Animated.Value(0)).current;
const diffClampY = Animated.diffClamp(scrollY, 0, 122);
const headerY = diffClampY.interpolate({
  inputRange: [0, 52],
  outputRange: [0, -52],
});


{/* <Animated.View style={[styles.header, {transform:[{translateY:headerY}]}]}></Animated.View> */ }

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
        <View style={{ ...listpainstyle.cardItem }}>
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
const CategoryItems = ({ title, style, item, label, listcategorystylem, color }) => {
  return (
    <View style={[listcategorystyle.item]}>
      <Text style={[listcategorystyle.title]}>{label}</Text>
    </View>
  );
};

//Penerapan Props
const ListCategory = () => {
  return (
    <View style={styles.listcategorystyle}>
      <View style={styles.headercategories}>
        <Text style={styles.txtcategories}>Categories</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ marginLeft: 20 }}>
          <CategoryItems label="Artist" />
        </View>
        <CategoryItems label="International" />
        <CategoryItems label="Indonesian" />
        <CategoryItems label="Abstract" />
        <View style={{ marginRight: 20 }}>
          <CategoryItems label="hehe" />
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



  return (
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
                    <View style={styles.containerdetail}>
                      <Image
                        source={{ uri: 'https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg' }}
                        style={[styles.imageback, { position: 'absolute' }]}
                        resizeMode="cover"
                      />
                    </View>
                    <ScrollView>
                      <View style={deskpaint.containerluar}>
                        <View style={deskpaint.container}>
                          <Text style={deskpaint.textdeskripsi}>
                            Salvador Dali
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            May 11, 1904
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            Figueres, Cataloina, Spanyol
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            Alias : Salvador Domingo Felipe Jacinto
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Salvador Dalí adalah seorang pelukis surealis terkemuka yang lahir di Figueres, Spanyol. Dalí mengakui bahwa nenek moyangnya adalah keturunan dari Moors, sehingga ia menjadi keturunan Arab. Dalí juga adalah juru terampil dan paling dikenal akan gambar mencolok dan aneh dalam pekerjaan surealisnya. Keterampilan painterly-nya sering dikaitkan sebagai pengaruh master-master Renaissance. Karya-karya opera artistik Dalí termasuk film, patung dan fotografi, adalah hasil kolaborasi dengan berbagai seniman di berbagai media.
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Dalí sangat imajinatif, ia menikmati terlibat dalam perilaku yang tidak biasa dan megah. Gaya eksentrik yang menarik perhatian publik kadang-kadang mendapat perhatian lebih daripada karya seninya, terutama bagi mereka yang mengagumi karyanya dengan harga tinggi dan pengkritiknya.
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Pada tahun 1980, Salvador Dalí menghadapi tragedi kesehatan yang signifikan, dimana istrinya yang sudah tua, Gala, diduga memberikannya obat berbahaya yang merusak sistem sarafnya dan mempengaruhi daya cipta seninya. Pada tahun 1982, Raja Juan Carlos menghormati Dalí dengan memberinya gelar Marqués de Dalí de Púbol sebagai bangsawan Spanyol. Sebagai ungkapan terima kasih, Dalí memberikan raja sebuah gambar, "Head of Europa," yang ternyata menjadi karya terakhir Dalí.
                          </Text>
                        </View>
                      </View>
                    </ScrollView>
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
                    <View style={styles.containerdetail}>
                      <Image
                        source={{ uri: 'https://biografi.kamikamu.co.id/wp-content/uploads/sites/41/2019/10/Affandi-Koesoema.jpg' }}
                        style={[styles.imageback, { position: 'absolute' }]}
                        resizeMode="cover"
                      />
                    </View>
                    <ScrollView>
                      <View style={deskpaint.containerluar}>
                        <View style={deskpaint.container}>
                          <Text style={deskpaint.textdeskripsi}>
                            Affandi Koesoema
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            May 18, 1907
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            Cirebon, Jawa Barat, Indonesia
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            Alias : Affandi
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Affandi Koesoma adalah maestro seni lukis Indonesia. Dia lahir pada tahun 1907 di Cirebon. Ayahnya, R. Koesoma, bekerja sebagai mantri ukur pabrik gula. Peruntungan ini membuat Affandi kecil berkesempatan mengecap berbagai tingkat bangku pendidikan (dalam sistem kolonial Belanda) mulai dari HIS, MULO, dan AMS; sebuah peruntungan yang memang tidak banyak bisa dirasakan teman sebayanya.
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Affandi mulai melukis dengan bergabung dalam kelompok seniman Lima Bandung yang menjadi tempat berkumpulnya pelukis kenamaan Hendra Gunawan, Barli, Sudarso, dan Wahdi, dan Affandi sendiri sebagai ketua. Selain itu, nama maestro lukis ini pernah menuai kontroversi pada masa-masa Orde Baru terkait keterlibatannya dalam kepemimpinan Lekra (Lembaga Kebudayaan Rakyat).
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Pada 1943, pameran tunggal pertama Affandi diadakan di Gedung Poetra Djakarta. Sejak itu, Affandi berubah menjadi matahari. Lebih dari 2000 karya lukis dihasilkan begawan warna Indonesia ini. Dan matahari lukisnya terus bersinar di benua Asia, Eropa, Amerika dan Australia. Begawan yang gemar menyulut rokoknya dengan pipa unik ini juga dianugerahi Doctor Honoris Causa dari University of Singapore pada 1974. Setahun sebelumnya, pemerintah Indonesia memberikan penghargaan berupa sebuah museum yang didirikan tepat di atas tanah yang pernah menjadi tempat tinggal sang Empu Lukis Indonesia dan diresmikan Menteri P&K masa itu, Fuad Hassan.
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Meski dunia internasional menyebut Affandi terpayungi dalam genre ekspresionisme, sang Begawan Lukis ini menyatakan tidak mengenal aliran seperti itu dalam karyanya. Tentu saja, Affandi dan Matahari bukan ekspresionis maupun yang lain; Affandi adalah Matahari itu sendiri. Dan aliran matahari belum dikenal di dunia lukis manapun di dunia ini. Dan sang Begawan sendiripun juga mungkin tidak peduli dengan sebutan, setidak peduli asap tembakau pipanya yang terus menyeruak, berbaur menjadi udara.
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Dalam melukis Affandi melangkah dengan lebih mengutamakan kebebasan berekspresi. Dilandasi jiwa kerakyatan, Affandi tertarik dengan tema kehidupan masyarakat kecil. Teknik melukis bentuk bahkan yang cenderung memerintah objeknya seperti yang dilakukan angkatan Moi India atau India Jelita, dirasakan Affandi tidak mewakili kondisi masyarakat dengan kemelaratan akibat penjajahan.
                          </Text>
                        </View>
                      </View>
                    </ScrollView>
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
                    <View style={styles.containerdetail}>
                      <Image
                        source={{ uri: 'https://assets-a1.kompasiana.com/items/album/2021/10/18/44fa523b2ad67f3f2bd123a39764f487-616cd7b60101906d841bf502.jpg' }}
                        style={[styles.imageback, { position: 'absolute' }]}
                        resizeMode="cover"
                      />
                    </View>
                    <ScrollView>
                      <View style={deskpaint.containerluar}>
                        <View style={deskpaint.container}>
                          <Text style={deskpaint.textdeskripsi}>
                            Leonardo Da Vinci
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            April 15, 1452
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            Italia
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            Alias : Leonardo Di Ser Piero Da Vinci
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Leonardo da Vinci adalah pelukis, pematung, arsitek, musisi, ilmuwan, matematikawan, insinyur, penemu, ahli anatomi, ahli geologi, pembuat peta, ahli botani, dan penulis. Kejeniusannya, mungkin lebih dari setiap tokoh lainnya, melambangkan teladan humanis Renaissance. Leonardo sering digambarkan sebagai contoh sempurna dari Renaissance Man, seorang pria dengan rasa ingin tahu tak terpadamkan, imajinasi yang berdayacipta. Da Vinci secara luas dianggap sebagai salah satu pelukis terbesar sepanjang masa.
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Leonardo dididik di studio pelukis terkenal Florence, Verrocchio. Banyak dari kehidupan sebelumnya ia habiskan dalam pelayanannya pada Ludovico il Moro, Duke of Milan 1489. Kemudian Da Vinci bekerja di Roma, Bologna dan Venesia, ia menghabiskan tahun-tahun terakhirnya di Prancis di rumah yang diberikan kepadanya oleh Francis I, Raja Perancis tahun 1515. Di antara karya-karyanya, Mona Lisa adalah yang paling terkenal , kemudian The Last Supper, lukisan religius yang paling banyak direproduksi sepanjang masa, karena teka-teki dan makna mendalam di dalamnya.
                          </Text>
                        </View>
                      </View>
                    </ScrollView>
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
                    <View style={styles.containerdetail}>
                      <Image
                        source={{ uri: 'https://kebudayaan.kemdikbud.go.id/bpsmpsangiran/wp-content/uploads/sites/11/2017/12/Raden-Saleh-Biografi.jpg' }}
                        style={[styles.imageback, { position: 'absolute' }]}
                        resizeMode="cover"
                      />
                    </View>
                    <ScrollView>
                      <View style={deskpaint.containerluar}>
                        <View style={deskpaint.container}>
                          <Text style={deskpaint.textdeskripsi}>
                            Raden Saleh Sjarif Boestaman
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            May, 1807
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            Semarang, Jawa Tengah, Indonesia
                          </Text>
                          <Text style={deskpaint.textjudul}>
                            Alias : Raden Saleh
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Raden saleh kecil dengan keahliannya yang menonjol sebagai seorang pelukis besar sejak bersekolah di sekolah rakyat di zamannya membuat Raden Saleh menjadi tokoh yang besar dengan berbagai macam penghargaan. Belajar dari seorang pelukis keturunan Belgia berasal dari belanda,menjadikan raden saleh seorang pelukis dengan multi talenta,seperti melukis dengan cat minyak,di tambah dengan terjun langsung dengan mencari objek pemandangan dan objek lukisan tipe tipe orang indonesia di daerah yang di singgahi.
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Pada Tahun 1829, hijrahlah Raden Saleh ke Belanda untuk Belajar, selama di eropa Raden Saleh juga belajar mendalami pelukisan hewan yang dipertemukan dengan sifat agresif manusia,melukis kehidupan satwa di padang pasir juga merupakan salah satu ilham yg keluar selama tinggal di Aljazair beberapa bulan pada tahun 1846. Raden Saleh juga di percaya menjadi menjadi konservator pada "Lembaga Kumpulan Koleksi Benda-benda Seni". Dari keunikan keunikan jiwa seni inilah yang menjadikan Raden saleh menjadi sosok tokoh yang sangat inspiratif di zamannya.
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Salah satu karya Raden Saleh adalah lukisan penangkapan Diponegoro,yg mana lukisan tersebut menggambarkan bahwa Raden Saleh tidak menyukai penindasan serta mempercayai idealisme kebebasan dan kemerdekaan. Berbagai macam penghargaan mengalir dari hasil karya Raden Saleh baik penghargaan mancanegara maupun dari indonesia. Raden saleh menikah dengan gadis keluarga ningrat keturunan Keraton Solo setelah perceraiannya dengan istri terdahulu.Batavia adalah tempat di mana Raden Saleh Tinggal dengan gedung hasil karyanya sendiri  dari segi bangunan dan tekniknya yang mana sesuai dengan tugasnya sebagai seorang pelukis.
                          </Text>
                          <Text style={deskpaint.textmain}>
                            Tanggal 23 April 1880 adalah sejarah bagi tokoh kebanggaan bangsa kita, meninggal dengan berbagai macam kontroversi menjadi topik hangat diperbincangkan. Namun, Bangsa kita bisa bangga, berkat Raden Saleh, Indonesia bisa menghasilkan anak bangsa dengan segala talenta dan kreativitasnya. Hasil hasil karyanya bisa menembus museum besar seperti Rijkmuseum belanda dan Louvre Paris.
                          </Text>
                        </View>
                      </View>
                    </ScrollView>
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

// const ListArtis = () => {
//   const horizontalData = BlogList.slice(0, 5);
//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View style={styles.listBlog}>
//         <ListHorizontal data={horizontalData} />
//       </View>
//     </ScrollView>
//   );
// };

const listartiststyle = StyleSheet.create({
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    right: 23,
  },
  small: {
    width: 160,
    height: 180,
    top: 30,
    marginBottom: 50,
    marginLeft: 23,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
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
    backgroundColor: colors.black(),
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
    fontFamily: fontType['cinzel-standart'],
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
  containerdetail: {
    flex: 1,
    backgroundColor: colors.black(),
  },
  containeranimasi: {
    flex: 1,
    backgroundColor: 'grey',
    height: 52,
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
    top: 0,
    zIndex: 1000,
  },
  afterheader: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  headercategories: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
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
  imageback: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

const navigation = useNavigation();

// const Foot = () => {
//   return (
//     <View style={foot.container}>
//       <TouchableOpacity style={foot.menu}>
//         <ArrowLeft3 size={24} variant='Linear' color={'black'} />
//       </TouchableOpacity>
//       <TouchableOpacity style={foot.menu}>
//         <RecordCircle size={24} variant='Linear' color={'black'} />
//       </TouchableOpacity>
//       <TouchableOpacity style={foot.menu}>
//         <Element3 size={24} variant='Linear' color={'black'} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const foot = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     height: 55,
//     backgroundColor: '#FFFFFF',
//     borderColor: '#DFD7BF',
//     borderWidth: 1,
//   },
//   menu: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


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
    bottom: 50,
  },
});