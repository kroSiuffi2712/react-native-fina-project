import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {config} from '../../../config';

const carouselItem = (props: any, carouselRef: any, setBackground: any) => {
  const {item, index} = props;
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          carouselRef.current.snapToItem(index);
          setBackground({
            id: item.id,
            overview: item.overview,
            poster_path: item.poster_path,
            release_date: item.hasOwnProperty('release_date')
              ? item.release_date
              : item.first_air_date,
            title: item.hasOwnProperty('title') ? item.title : item.name,
          });
        }}>
        <Image
          source={{uri: `${config.API_IMAGE_URL}${item?.poster_path}`}}
          style={styles.carouselImage}
        />
        <Text style={styles.carouselText}>{item?.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  carouselText: {
    paddingLeft: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold',
  },
});
export default carouselItem;
