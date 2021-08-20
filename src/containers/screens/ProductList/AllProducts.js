import React, {useEffect, useState} from 'react';
import ProductListFlatlist from './ProductListFlatlist';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearAllFilter,
  clearFilter,
  filterCategory,
  filterColor,
  filterPrice,
  filterRating,
  productListRequest,
} from '../../../redux/action/action';
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
import Icon from 'react-native-vector-icons/Entypo';

/**
 *
 * @param {*} param0 props in which contains navigation and information of Products category.
 * @description This is a All Products List screen which shows all the products.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function AllProducts(props) {
  const dispatch = useDispatch();
  const productListData = useSelector(
    state => state.productList.productListData,
  );

  const displayData = useSelector(state => state.productList.displayData);

  const isLoading = useSelector(state => state.productList.isLoading);

  // const [cloneData, setCloneData] = useState(productListData);

  // const [sortedData, setSortedData] = useState(cloneData);
  // const [sortedData, setSortedData] = useState(di);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    type: '',
    data: '',
  });

  const [filterButton, setFilterButton] = useState(false);

  // useEffect(() => {
  //   // dispatch(productListRequest());
  //   // setSortedData(productListData);
  // }, []);

  // const handleSorting = (type, subType) => {
  //   if (type === 'price') {
  //    if(data){
  //     if (subType === 'high') {
  //       setSortedData(
  //         sortedData.sort(function (a, b) {
  //           return b.price - a.price;
  //         }),
  //         setModalVisible(false),
  //       );
  //     } else if (subType === 'low') {
  //       setSortedData(
  //         sortedData.sort(function (a, b) {
  //           return a.price - b.price;
  //         }),
  //         setModalVisible(false),
  //       );
  //     }
  //    }else {
  //     if (subType === 'high') {
  //       setSortedData(
  //         cloneData.sort(function (a, b) {
  //           return b.price - a.price;
  //         }),
  //         setModalVisible(false),
  //       );
  //     } else if (subType === 'low') {
  //       setSortedData(
  //         cloneData.sort(function (a, b) {
  //           return a.price - b.price;
  //         }),
  //         setModalVisible(false),
  //       );
  //     }
  //   }
  //   }

  //   if (type === 'rating') {
  //     if(data){
  //       if (subType === 'high') {
  //         setSortedData(
  //           sortedData.sort(function (a, b) {
  //             return b.avgRating - a.avgRating;
  //           }),
  //           setModalVisible(false),
  //         );
  //       } else if (subType === 'low') {
  //         setSortedData(
  //           sortedData.sort(function (a, b) {
  //             return a.avgRating - b.avgRating;
  //           }),
  //           setModalVisible(false),
  //         );
  //       }
  //     }else{
  //     if (subType === 'high') {
  //       setSortedData(
  //         cloneData.sort(function (a, b) {
  //           return b.avgRating - a.avgRating;
  //         }),
  //         setModalVisible(false),
  //       );
  //     } else if (subType === 'low') {
  //       setSortedData(
  //         cloneData.sort(function (a, b) {
  //           return a.avgRating - b.avgRating;
  //         }),
  //         setModalVisible(false),
  //       );
  //     }
  //   }
  //   }

  //   if (type === 'Category') {
  //     setModalVisible(!modalVisible);
  //     setSortedData(
  //       cloneData.filter(function (a) {
  //         return a.category.name === subType;
  //       }),
  //     );
  //   }

  //   if (type === 'Color') {
  //     setModalVisible(!modalVisible);
  //     setSortedData(
  //       cloneData.filter(function (a) {
  //         return a.color.name === subType;
  //       }),
  //     );
  //   }

  // };

  // const handleSorting = (type, subType) => {
  //   if (type === 'Category') {
  //     setModalVisible(!modalVisible);
  //     setCloneData(
  //       productListData.filter(function (a) {
  //         return a.category.name === subType;
  //       }),
  //     );
  //   }

  //   if (type === 'Color') {
  //     setModalVisible(!modalVisible);
  //     setCloneData(
  //       productListData.filter(function (a) {
  //         return a.color.name === subType;
  //       }),
  //     );
  //   }
  // }

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

  // useEffect(() => {
  //   if (props.route.params.type === 'All') {
  //     setSortedData(productListData);
  //     // setCloneData(productListData)
  //   } else {
  //     setSortedData(
  //       cloneData.filter(function (a) {
  //         return a.category.name === props.route.params.type;
  //       }),
  //     );
  //     // setCloneData(
  //     //   cloneData.filter(function (a) {
  //     //     return a.category.name === props.route.params.type;
  //     //   }),
  //     // );
  //   }
  // }, [props.route.params]);

  const handleSorting = (type, subType) => {
    setModalVisible(false);
    if (type === 'Category') {
      dispatch(filterCategory(subType));
    }

    if (type === 'Color') {
      dispatch(filterColor(subType));
    }

    if (type === 'price') {
      dispatch(filterPrice(subType));
    }

    if (type === 'rating') {
      dispatch(filterRating(subType));
    }
  };

  return (
    <View style={styles.container}>
      {displayData?.length === 0 ? null : filterButton ? (
        <TouchableOpacity
          style={styles.clearFilterTouchable}
          onPress={() => {
            dispatch(productListRequest());
            // dispatch(clearAllFilter())
            // dispatch(clearFilter())
            // setSortedData(productListData);
            // setCloneData(productListData)
            setFilterButton(false);
          }}>
          <Text style={styles.clearFilterText}>Clear Filter</Text>
        </TouchableOpacity>
      ) : null}
      {isLoading ? (
        <ActivityIndicator size={50} color={Colors.skyblue} />
      ) : (
        <ProductListFlatlist
          productListData={displayData}
          navigation={props.navigation}
          type="AllProducts"
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
                <TouchableOpacity
                  style={styles.crossTouchable}
                  onPress={() => setModalVisible(false)}
                  activeOpacity={0.9}>
                  <Icon name="cross" size={30} />
                </TouchableOpacity>

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
                      onPress={() => {
                        handleSorting(modalData.type, item.subType);
                        // dispatch(changeCategory(modalData.type, item.subType))
                        setFilterButton(true);
                      }}>
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
  crossTouchable: {
    borderRadius: 50,
    backgroundColor: Colors.lightgray,
    borderColor: Colors.lightgray,
    position: 'absolute',
    right: -12,
    top: -10,
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
