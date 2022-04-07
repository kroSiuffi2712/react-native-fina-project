import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import carouselItem from './CarouselItems';
import {result, IResults} from '../../store/reducers/moviesReducer';
import Loading from '../components/Loading';
import {config} from '../../../config';
import Overview from './Overview';
import Searchbox from './Searchbox';

const CarouselComponent = (props: any) => {
  const {data, type} = props;
  const [background, setBackground] = useState<IResults>(result);
  const {width} = Dimensions.get('window');
  const carouselRef = useRef(null);

  useEffect(() => {
    if (data?.results?.length > 0) {
      setBackground(data.results[0]);
    }
  }, [data.results]);

  return !data.loading ? (
    <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
      <ImageBackground
        source={{uri: `${config.API_IMAGE_URL}${background.poster_path}`}}
        style={styles.ImageBg}
        blurRadius={10}>
        <Searchbox type={type} />
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 10,
            marginVertical: 10,
          }}>
          Top Picks this Week
        </Text>
        <View style={styles.carouselContainerView}>
          <Carousel
            style={styles.carousel}
            data={data.results}
            renderItem={e => carouselItem(e, carouselRef, setBackground)}
            itemWidth={200}
            sliderWidth={width - 20}
            ref={carouselRef}
            inactiveSlideShift={0}
            useScrollView={true}
          />
        </View>
        <Overview
          title={
            background.hasOwnProperty('title')
              ? background?.title
              : background?.name
          }
          release_date={
            background.hasOwnProperty('release_date')
              ? background?.release_date
              : background?.first_air_date
          }
          overview={background.overview}
        />
      </ImageBackground>
    </View>
  ) : (
    <Loading />
  );
};

const styles = StyleSheet.create({
  ImageBg: {
    flex: 1,
    height: undefined,
    width: undefined,
    opacity: 1,
    justifyContent: 'flex-start',
  },
  carouselContainerView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    overflow: 'visible',
  },
});

export default CarouselComponent;
