import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../assets/Colors';
export default function StoreLocator() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 19.090795877445505,
          longitude: 72.82963201677117,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}>
        <Marker
          coordinate={{
            latitude: 19.090795877445505,
            longitude: 72.82963201677117,
          }}
          title="NeoStore, Mumbai "
          style={styles.markerStyle}>
          <Icons color={Colors.red} name="location-pin" size={32} />
        </Marker>
        <Marker
          coordinate={{
            latitude: 18.613445197389776,
            longitude: 73.73731460548694,
          }}
          title="NeoStore, Pune "
          style={styles.markerStyle}>
          <Icons color={Colors.red} name="location-pin" size={32} />
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerStyle: {
    width: 30,
    height: 30,
  },
});
