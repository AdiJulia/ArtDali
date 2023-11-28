import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { Element3, RecordCircle, ArrowLeft, SearchNormal1 } from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

const SearchApp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containertitle}>
          <Text style={styles.txttitle}>Search</Text>
        </View>
        <SearchBar />
      </ScrollView>
    </View>
  );
}

const SearchBar = () => {
  return (
    <View style={SearchStyle.container}>
      <View style={SearchStyle.header}>
        <View style={SearchStyle.lil2header}>
          <View style={SearchStyle.lilheader}>
            <SearchNormal1 style={SearchStyle.searchicon}/>
            <Text style={SearchStyle.searchText}>Search here</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const SearchStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white(),
    height: 70,
    paddingHorizontal: 0,
    marginBottom: 15,
    marginTop: -10,
  },
  lilheader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.white(),
    borderRadius: 15,
    height: 50,
    width: 358,
    paddingHorizontal: 0,
  },
  lil2header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey(),
    borderRadius: 17,
    height: 55,
    width: 363,
    paddingHorizontal: 0,
    elevation: 20,
  },
  searchicon: {
    size: 28,
    color: 'black',
    marginLeft: 20,
    marginTop: 12,
    marginRight: 10,
  },
  searchText: {
    fontSize: 16,
    color: 'black',
    fontFamily: fontType['inter-inter'],
    marginTop: 13,
  },
});

// const Favorite = () => {
//   return (
//     <View>
//       <View style={styles.afterheader}>
//         <Text style={styles.txtafterheader}>Favorite</Text>
//         {/* <ArrowRight color={colors.black()} variant="Linear" size={26} /> */}
//       </View>
//       <View style={favorite.columnContainer}>
//         <View style={favorite.small}>
//           <Image
//             style={favorite.listgambar}
//             resizeMode="cover"
//             source={{
//               uri: 'https://lider.id/images/posts/1/2021/2021-06-14/022e3b89e9b72b6d6033a466f459b1e8_1.jpeg',
//             }} />
//         </View>
//         <View>
//           <View style={favorite.small2}>
//             <Image
//               style={favorite.listgambar}
//               resizeMode="cover"
//               source={{
//                 uri: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/07/B700374-2-Starry-Night-1889-scaled.jpg',
//               }} />
//           </View>
//           <View style={favorite.columnContainerSmall}>
//             <View style={favorite.small3}>
//               <Image
//                 style={favorite.listgambar}
//                 resizeMode="cover"
//                 source={{
//                   uri: 'https://media.mutualart.com/Images//2019_11/07/14/144815047/ddb38d1f-0936-48a2-9aef-56b751efa2ce.Jpeg',
//                 }} />
//             </View>
//             <View style={favorite.small4}>
//               <Image
//                 style={favorite.listgambar}
//                 resizeMode="cover"
//                 source={{
//                   uri: 'https://pbs.twimg.com/media/EBkrj-mU8AA9xyl.jpg',
//                 }} />
//             </View>
//           </View>
//         </View>
//       </View>

//       <View style={favorite.columnContainer}>
//         <View style={favorite.small0}>
//           <Image
//             style={favorite.listgambar}
//             resizeMode="cover"
//             source={{
//               uri: 'https://www.artnet.com/WebServices/images/ll2095353llgvkkR3CfDrCWQFHPKAD/affandi-potret-diri-(self-portrait).jpg',
//             }} />
//         </View>
//         <View>
//           <View style={favorite.small2}>
//             <Image
//               style={favorite.listgambar}
//               resizeMode="cover"
//               source={{
//                 uri: 'https://www.tallengestore.com/cdn/shop/products/bw96dsrw0v031_b591f1bd-91e4-46a4-8b18-8015f0b33ee0.jpg?v=1613366205',
//               }} />
//           </View>
//           <View style={favorite.small2}>
//             <Image
//               style={favorite.listgambar}
//               resizeMode="cover"
//               source={{
//                 uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Raden_Saleh_-_Diponegoro_arrest.jpg/300px-Raden_Saleh_-_Diponegoro_arrest.jpg',
//               }} />
//           </View>
//         </View>
//       </View>
//       <View style={favorite.small5}>
//         <Image
//           style={favorite.listgambar}
//           resizeMode="cover"
//           source={{
//             uri: 'https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/TATE/TATE/TATE_TATE_T05010_10-001.jpg',
//           }} />
//       </View>
//     </View>
//   );
// };

// const favorite = StyleSheet.create({
//   columnContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   columnContainerSmall: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   column: {
//     right: 23,
//   },
//   small0: {
//     width: 145,
//     height: 230,
//     marginBottom: 20,
//     marginLeft: 23,
//     borderRadius: 15,
//     justifyContent: 'center',
//     backgroundColor: 'black',
//   },
//   small: {
//     width: 145,
//     height: 210,
//     marginBottom: 20,
//     marginLeft: 23,
//     borderRadius: 15,
//     justifyContent: 'center',
//     backgroundColor: 'black',
//   },
//   small2: {
//     width: 190,
//     height: 110,
//     marginBottom: 10,
//     marginRight: 23,
//     borderRadius: 15,
//     justifyContent: 'center',
//     backgroundColor: 'black',
//   },
//   small3: {
//     width: 90,
//     height: 90,
//     marginBottom: 20,
//     borderRadius: 15,
//     justifyContent: 'center',
//     backgroundColor: 'black',
//   },
//   small4: {
//     width: 90,
//     height: 90,
//     marginBottom: 20,
//     marginRight: 23,
//     borderRadius: 15,
//     justifyContent: 'center',
//     backgroundColor: 'black',
//   },
//   small5: {
//     width: 345,
//     height: 210,
//     marginBottom: 20,
//     marginRight: 23,
//     marginLeft: 23,
//     borderRadius: 15,
//     justifyContent: 'center',
//     backgroundColor: 'black',
//   },
//   listgambar: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 15,
//   },
// });

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
    fontFamily: fontType['cinzel-black'],
    color: colors.black(),
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 5,
    marginLeft: 23,
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

export default SearchApp;



