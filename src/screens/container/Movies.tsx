import React, {useEffect} from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {fetchMovies} from '../../store/actions/moviesActions';
import {searchType} from '../../types/enum/searchType';

import CarouselComponent from '../components/Carousel';
import Loading from '../components/Loading';

const Movies = () => {
  const moviesState = useSelector((state: RootState) => state.movies);
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(fetchMovies());
  }, [dipatch]);

  return !moviesState.loading ? (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#000'}}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View style={styles.carouselContentContainer}>
          <CarouselComponent data={moviesState.data} type={searchType.MOVIE} />
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Loading />
  );
};

const styles = StyleSheet.create({
  carouselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: Dimensions.get('window').height,
    paddingHorizontal: 14,
  },
});
export default Movies;
