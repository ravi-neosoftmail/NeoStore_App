import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {Colors} from '../../../assets/Colors';


/**
 * 
 * @param {*} param0 navigation which is used to navigate between screens.
 * @description This is a Search screen in which we have to search the different products.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */


export default function Search({navigation}) {
  const productListData = useSelector(
    state => state.productList.productListData,
  );

  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState();

  const handleSearch = val => {
    let value = val.toLowerCase();
    setSearchText(val);
    if (value) {
      const result = productListData.filter(item =>
        item.name.toLowerCase().match(value),
      );
      setFilteredData(result);
    } else {
      setFilteredData();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBoxView}>
        <Icons name="search" size={30} />
        <TextInput
          style={styles.searchBoxTextInput}
          placeholder="Search Products"
          autoFocus={true}
          value={searchText}
          onChangeText={val => handleSearch(val)}
        />
      </View>

      <View style={styles.flatlistContainer}>
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.flatlistView}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Product Details', {item})}>
              <Text style={styles.flatlistText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBoxView: {
    marginBottom: 5,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    paddingLeft: 5,
    backgroundColor: Colors.lightgray,
  },
  searchBoxTextInput: {
    width: '90%',
    paddingLeft: 5,
    height: 50,
    fontSize: normalize(20),
  },
  flatlistContainer: {
    marginTop: 5,
    flex: 1,
  },
  flatlistView: {
    borderBottomWidth: 1,
    height: normalize(50),
    justifyContent: 'center',
    paddingLeft: 5,
    backgroundColor: Colors.lightgray,
    borderColor: Colors.gray,
  },
  flatlistText: {
    fontSize: normalize(15),
  },
});
