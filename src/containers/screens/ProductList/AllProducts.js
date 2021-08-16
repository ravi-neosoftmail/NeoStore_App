import React, {useEffect, useState} from 'react';
import ProductListFlatlist from './ProductListFlatlist';
import {useDispatch, useSelector} from 'react-redux';
import {productListRequest} from '../../../redux/action/action';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Modal,
  FlatList,
} from 'react-native';
import {Colors} from '../../../assets/Colors';
import normalize from 'react-native-normalize';
import {
  ratingData,
  priceData,
  categoryData,
  colorData,
} from '../../../component/JsonData';

export default function AllProducts(props) {
  const dispatch = useDispatch();
  const productListData = useSelector(
    state => state.productList.productListData,
  );

  const isLoading = useSelector(state => state.productList.isLoading);

  const [cloneData, setCloneData] = useState(productListData);

  const [sortedData, setSortedData] = useState(cloneData);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    type: '',
    data: '',
  });


  useEffect(() => {
    dispatch(productListRequest());
    setSortedData(productListData);
  }, []);

  const handleSorting = (type, subType) => {
    if (type === 'price') {
      if (subType === 'high') {
        setSortedData(
          cloneData.sort(function (a, b) {
            return b.price - a.price;
          }),
          setModalVisible(!modalVisible),
        );
      } else if (subType === 'low') {
        setSortedData(
          cloneData.sort(function (a, b) {
            return a.price - b.price;
          }),
          setModalVisible(!modalVisible),
        );
      }
    }

    if (type === 'rating') {
      if (subType === 'high') {
        setSortedData(
          cloneData.sort(function (a, b) {
            return b.avgRating - a.avgRating;
          }),
          setModalVisible(!modalVisible),
        );
      } else if (subType === 'low') {
        setSortedData(
          cloneData.sort(function (a, b) {
            return a.avgRating - b.avgRating;
          }),
          setModalVisible(!modalVisible),
        );
      }
    }

    if (type === 'Category') {
      setModalVisible(!modalVisible);
      if (subType === 'table') {
        setSortedData(cloneData), setModalVisible(!modalVisible);
      } else {
        setSortedData('');
        setModalVisible(!modalVisible);
      }
    }

    if (type === 'Color') {
      setModalVisible(!modalVisible);
      if (subType === 'yellow') {
        setSortedData(
          cloneData.sort(function (a) {
            return a.color.name === 'yellow';
          }),
        ),
          setModalVisible(!modalVisible);
      } else {
        setSortedData('');
        setModalVisible(!modalVisible);
      }
    }
  };

  const handleModal = type => {
    setModalVisible(true);
    if (type === 'rating') {
      setModalData({type: 'rating', data: ratingData});
    } else if (type === 'price') {
      setModalData({type: 'price', data: priceData});
    } else if (type === 'category') {
      setModalData({type: 'Category', data: categoryData});
    } else if (type === 'color') {
      setModalData({type: 'Color', data: colorData});
    }
  };

  useEffect(() => {
    if (props.route.params.type === 'dashboardProduct') {
      setSortedData('');
    }
  }, [props.route.params]);

  return (
    <View style={styles.container}>
      {sortedData.length === 0 ? null : (
        <TouchableOpacity
          style={styles.clearFilterTouchable}
          onPress={() => {
            dispatch(productListRequest());
            setSortedData(productListData);
          }}>
          <Text style={styles.clearFilterText}>Clear Filter</Text>
        </TouchableOpacity>
      )}
      {isLoading ? (
        <ActivityIndicator size={50} color={Colors.skyblue} />
      ) : (
        <ProductListFlatlist
          productListData={sortedData}
          navigation={props.navigation}
        />
      )}

      <View style={{flex: 0.065}}></View>

      <View style={styles.botomView}>
        <TouchableOpacity
          style={styles.addCartTouchable}
          activeOpacity={0.9}
          onPress={() => handleModal('category')}>
          <Text style={styles.rateTouchableText}>Category </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addCartTouchable}
          activeOpacity={0.9}
          onPress={() => handleModal('color')}>
          <Text style={styles.rateTouchableText}>Color</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addCartTouchable}
          activeOpacity={0.8}
          onPress={() => handleModal('rating')}>
          <Text style={styles.rateTouchableText}>Rating</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addCartTouchable}
          activeOpacity={0.9}
          onPress={() => handleModal('price')}>
          <Text style={styles.rateTouchableText}>Price</Text>
        </TouchableOpacity>
      </View>
      {modalVisible ? (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <View style={styles.headerView}>
                  <Text style={styles.headerText}>
                    Sort by {modalData.type}
                  </Text>
                </View>
                <FlatList
                  data={modalData.data}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={styles.flatlistTouchable}
                      activeOpacity={0.8}
                      onPress={() =>
                        handleSorting(modalData.type, item.subType)
                      }>
                      <Text style={styles.flatlistText}> {item.title} </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  botomView: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    backgroundColor: Colors.lightgray,
  },
  addCartTouchable: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  addCartTouchableText: {
    fontSize: normalize(15),
  },
  rateTouchableText: {
    fontSize: normalize(18),
    color: 'blue',
  },

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
  clearFilterTouchable: {
    margin: 15,
    marginBottom: 0,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'lightgray',
  },
  clearFilterText: {
    fontSize: normalize(18),
    fontWeight: '700',
  },
});
