// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import normalize from 'react-native-normalize';
// import {Colors} from '../../../assets/Colors';

// export default function OrderHistoryFlatlist({navigation}) {
//   return (
//     <TouchableOpacity style={styles.container}  >
//       {/* <FlatList
//         data={addressData}
//         // keyExtractor={item => item.id}
//         renderItem={({item}) => ( */}
//       <View style={styles.flatlistContainer}>
//         <View style={styles.idView}>
//           <Text style={styles.idText}>Order Id :</Text>
//         </View>

//         <View style={styles.middleView}>
//           <View style={styles.descriptionView}>
//             <Text style={styles.textStyle}>
//               4-Seater Dining Table Wardrobe with mirror in Brown finish{' '}
//             </Text>
//           </View>

//           <View style={styles.separatorLine}></View>

//           <View style={styles.priceView}>
//             <Text style={styles.textStyle}>Rs.12950</Text>
//           </View>
//         </View>

//         <View style={styles.bottomView}>
//           <Text style={styles.textStyle}>Order on : 2021-06-17</Text>
//         </View>
//       </View>
//       {/* )}
//       /> */}
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // paddingTop: 10,
//     // marginBottom: normalize(10),
//     borderWidth:2
//   },
//   flatlistContainer: {
//     backgroundColor: Colors.white,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 5,
//     marginBottom: normalize(10),

//   },
//   idView: {
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.lightgray,
//     padding: normalize(10),
//   },
//   idText: {
//     fontSize: normalize(15),
//     fontWeight: 'bold',
//   },
//   middleView: {
//     borderBottomWidth: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottomColor: Colors.lightgray,
//   },
//   descriptionView: {
//     width: '70%',
//     padding: normalize(10),
//   },
//   textStyle: {
//     fontSize: normalize(15),
//   },
//   separatorLine: {
//     borderEndWidth: 1,
//     borderColor: Colors.lightgray,
//   },
//   priceView: {
//     justifyContent: 'center',
//     padding: normalize(10),
//     width: '30%',
//     alignItems: 'center',
//   },
//   bottomView: {
//     padding: normalize(10),
//   },
// });
