import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Colors} from '../../../assets/Colors';
import normalize from 'react-native-normalize';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';


export default function RateModal(props) {
  const [starValue, setStarValue] = useState(0);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>{props.name}</Text>
            </View>
            <Image style={styles.image} source={{uri: props.mainImage}} />

            <View style={styles.ratingView}>
              <Text style={styles.ratingText}> {starValue} / 5</Text>
              <Stars
                default={starValue}
                count={5}
                half={true}
                update={val => {
                  setStarValue(val);
                }}
                fullStar={
                  <Icon name={'star'} style={[styles.myStarStyle]} size={25} />
                }
                emptyStar={
                  <Icon
                    name={'star-outline'}
                    size={25}
                    style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                  />
                }
                halfStar={
                  <Icon
                    name={'star-half'}
                    size={25}
                    style={[styles.myStarStyle]}
                  />
                }
              />
            </View>

            <TouchableOpacity
              style={styles.rateButton}
              onPress={() => {
                props.setModalVisible(false)
                Toast.show({
                  type: 'success',
                  position: 'bottom',
                  text1: 'Rating Successfull',
                  visibilityTime: 2000,
                  autoHide: true,
                  topOffset: 30,
                  bottomOffset: 40,
                });
              }}
              >
              <Text style={styles.rateButtonText}> Rate </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 10,
    elevation: 7,
    minHeight: '20%',
    width: '65%',
    maxHeight: '60%',
    alignItems: 'center',
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: normalize(10),
    width: '100%',
    borderColor: Colors.lightgray,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: Colors.white,
  },
  image: {
    height: normalize(200),
    width: normalize(200),
  },
  ratingView: {
    alignItems: 'center',
    margin: 10,
    marginBottom: 20,
  },
  ratingText: {
    fontWeight: '700',
    fontSize: normalize(18),
    marginBottom: normalize(8),
  },
  rateButton: {
    width: '40%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.red,
  },
  rateButtonText: {
    fontWeight: '700',
    fontSize: normalize(18),
    color: Colors.white,
  },
});
