import React, {useEffect} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default function ZoomImage(props) {
  const images = [
    {
      url: props.route.params.subImages[0],
    },
  ];
  return (
    <Modal visible={true} transparent={true} style={{flex: 1}}>
      <TouchableOpacity
        style={{backgroundColor: 'black'}}
        onPress={() => props.navigation.goBack()}>
        <Icons
          name="arrow-back"
          size={35}
          color={'white'}
          style={{paddingTop: 50}}
        />
      </TouchableOpacity>
      <ImageViewer imageUrls={images} style={{flex: 1}} />
    </Modal>
  );
}
