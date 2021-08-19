import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Colors} from '../../../assets/Colors';
import normalize from 'react-native-normalize';
import { ratingData } from '../../../component/JsonData';


/**
 *
 * @param {*} param0 props in which contains navigation and information of Products category.
 * @description This is a All Products List screen which shows all the products.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */


export default function ProductListModal(props) {
  
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>Sort by rating</Text>
            </View>
            <FlatList
              data={ratingData}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.flatlistTouchable}
                  activeOpacity={0.8}
                  onPress={() => props.setModalVisible(!props.modalVisible)}>
                  <Text style={styles.flatlistText}> {item.title} </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: normalize(10),
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  flatlistTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 15,
    borderRadius: 10,
    backgroundColor: Colors.lightgray,
    marginBottom: 10,
  },
  flatlistText: {
    fontSize: normalize(15),
  },
});
