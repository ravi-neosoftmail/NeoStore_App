import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import normalize from 'react-native-normalize';
import {Colors} from '../../../assets/Colors';
import RNFetchBlob from 'rn-fetch-blob';

/**
 *
 * @param {*} param0 props in which navigation and information of order details of delivered products.
 * @description This is a Order Details screen which has option to download the invoice of delivered products.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function OrderDetails(props) {
  const {name, id, price, mainImage} =
    props.route.params.item.items[0].productId;

  const {item} = props.route.params;

  const handleDownloadInvoice = () => {
    let fileUrl = mainImage;
    let dirs =
      Platform.OS == 'ios'
        ? RNFetchBlob.fs.dirs.PictureDir
        : RNFetchBlob.fs.dirs.PictureDir;
    RNFetchBlob.config({
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
  };

  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  const androidDownloadImage = () => {
    var date = new Date();
    var image_URL = `${mainImage}`;
    var ext = getExtention(image_URL);
    ext = '.' + ext[0];
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        Alert.alert('Image Downloaded Successfully.');
      })
      .catch(error => {
        Alert.alert('Something Went Wrong!!');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.orderIdView}>
        <Text style={styles.orderIdText}> Order Id : {id}</Text>
      </View>
      <FlatList
        data={item.items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.flatlistContainerView}
            activeOpacity={0.8}
            onPress={() =>
              props.navigation.navigate('Product Details', {
                item: {
                  subImages: item.productId.subImages,
                  name: item.productId.name,
                  category: {name: 'Table'},
                  price: item.productId.price,
                  color: {name: 'Yellow'},
                  avgRating: item.productId.avgRating,
                  description: item.productId.description,
                  features: item.productId.features,
                  id: item.productId.id,
                  mainImage: item.productId.mainImage,
                },
              })
            }>
            <Image
              style={styles.image}
              source={{uri: item.productId.mainImage}}
            />
            <View style={styles.detailsView}>
              <View style={{}}>
                <Text style={styles.textStyle}>{item.productId.name}</Text>
              </View>
              <View style={styles.priceView}>
                <View>
                  <Text style={styles.textStyle}>
                    Rs.{item.productId.price}{' '}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.downloadTouchable}
        activeOpacity={0.8}
        onPress={() => {
          if (Platform.OS === 'ios') {
            handleDownloadInvoice();
          } else {
            androidDownloadImage();
          }
        }}>
        <Text style={styles.downloadText}> Download Invoice </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  flatlistContainerView: {
    marginTop: 5,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  image: {
    height: normalize(100),
    width: normalize(110),
  },
  detailsView: {
    width: normalize(220),
    marginLeft: 10,
    padding: 2,
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // position: 'absolute',
    // bottom: 3,
    // width: 180,
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  textStyle: {
    fontWeight: 'bold',
  },
  categoryView: {
    marginTop: normalize(8),
  },
});
