import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import normalize from 'react-native-normalize';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../../assets/Colors';
import {getOrderListRequest} from '../../../redux/action/action';



/**
 *
 * @param {*} param0 navigation which is used to navigate between different screens.
 * @description This is a Order History screen which has the details of all place order of User.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */



export default function OrderHistory({navigation}) {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData.user);
  const orderData = useSelector(state => state.orderList.orderList);

  const isLoading = useSelector(state=> state.orderList.isLoading)

  const {token} = userData;

  useEffect(() => {
    dispatch(getOrderListRequest(token));
  }, []);

  return (
    <View style={styles.container}>

{isLoading ? (
        <ActivityIndicator size={30} color={Colors.skyblue} />
      ) : (
      <FlatList
        data={orderData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.flatlistContainer}
            onPress={() => navigation.navigate('Order Details', {item})}>
            <View style={styles.idView}>
              <Text style={styles.idText}>
                Order Id : {item.id}
              </Text>
            </View>

            <View style={styles.middleView}>
              <View style={styles.descriptionView}>
                <FlatList 
                  data={item.items}
                  keyExtractor = {item => item.id}
                  renderItem={ ({item}) => (
                    <Text style={[styles.textStyle, {marginBottom:normalize(10)}]}>
                      {item.productId.name}
                  </Text>
                  )}
                />
                
              </View>

              {/* <View style={styles.separatorLine}></View>

              <View style={styles.priceView}>
                <Text style={styles.textStyle}>
                  Rs.{item.items[0].productId.price}
                </Text>
              </View> */}
            </View>

            <View style={styles.bottomView}>
              <Text style={styles.textStyle}>
                Order on : {item.updatedAt.slice(0,10)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(15),
    justifyContent:'center'
  },
  flatlistContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: normalize(10),
  },
  idView: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgray,
    padding: normalize(10),
  },
  idText: {
    fontSize: normalize(15),
    fontWeight: 'bold',
  },
  middleView: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.lightgray,
  },
  descriptionView: {
    padding: normalize(10),
    paddingBottom:0
  },
  textStyle: {
    fontSize: normalize(15),
  },
  separatorLine: {
    borderEndWidth: 1,
    borderColor: Colors.lightgray,
  },
  priceView: {
    justifyContent: 'center',
    padding: normalize(10),
    width: '30%',
    alignItems: 'center',
  },
  bottomView: {
    padding: normalize(10),
  },
});
