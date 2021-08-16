import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import normalize from 'react-native-normalize';
import {Colors} from '../../../assets/Colors';
import RNFetchBlob from 'rn-fetch-blob'

export default function OrderDetails(props) {
  const {name, id, price, mainImage} = props.route.params.item.items[0].productId;

const handleDownloadInvoice = () => {
  let fileUrl = mainImage;
  let dirs =
      Platform.OS == 'ios'
        ? RNFetchBlob.fs.dirs.PictureDir
        : RNFetchBlob.fs.dirs.PictureDir;
  RNFetchBlob
  .config({
    fileCache: true,
    path: `${dirs}/${fileUrl}`,
    notification: true,
    description: 'Image',
  })
  .fetch('GET', fileUrl)
  .then(res => {
    if (Platform.OS === 'ios') {
      RNFetchBlob.fs.writeFile(`${dirs}/${fileUrl}`, res.data, 'base64');
      RNFetchBlob.ios.previewDocument(`${dirs}/${fileUrl}`);
    }
  })
  .catch(error => {
    Alert.alert('Something Went Wrong!!');
  });
}

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.orderIdView}>
          <Text style={styles.orderIdText}> Order Id : {id}</Text>
        </View>

        <View style={styles.imageView}>
          <Image style={styles.image} 
            source={{uri: mainImage}}
          />

          <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>{name}</Text>
          </View>
        </View>

        <View>
          <View style={styles.lastView}>
            <Text style={styles.descriptionText}>Price : </Text>
            <Text style={styles.lastViewText}>Rs.{price} </Text>
          </View>

          <View style={styles.lastView}>
            <Text style={styles.descriptionText}>Ordered on : </Text>
            <Text style={styles.lastViewText}>{props.route.params.item.updatedAt.slice(0,10)}</Text>
          </View>

          <View style={styles.lastView}>
            <Text style={styles.descriptionText}>Ordered status : </Text>
            <Text style={styles.lastViewText}>Delivered </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.downloadTouchable} 
        activeOpacity={0.8} 
          onPress={() => handleDownloadInvoice()}
        >
        <Text style={styles.downloadText}> Download Invoice </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  orderIdView: {
    borderBottomWidth: 1,
    marginTop: 10,
    padding: 10,
    borderColor: Colors.lightgray,
  },
  orderIdText: {
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  imageView: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: Colors.gray,
  },
  image: {
    height: normalize(100),
    width: normalize(120),
    margin: 10,
  },
  descriptionView: {
    height: '100%',
    width: '55%',
    paddingLeft: 10,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: normalize(18),
  },
  lastView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  lastViewText: {
    fontSize: normalize(15),
  },
  downloadTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(50),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Colors.purple,
  },
  downloadText: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: Colors.white,
  },
});
