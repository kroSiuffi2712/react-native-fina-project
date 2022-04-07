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
import {fetchTVShows} from '../../store/actions/tvShowsAction';
import {searchType} from '../../types/enum/searchType';

import CarouselComponent from '../components/Carousel';
import Loading from '../components/Loading';

const TVShows = () => {
  const tvShowsState = useSelector((state: RootState) => state.tvShows);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTVShows());
  }, [dispatch]);

  return !tvShowsState.loading ? (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#000'}}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View style={styles.carouselContentContainer}>
          <CarouselComponent
            data={tvShowsState.data}
            type={searchType.TVSHOW}
          />
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
export default TVShows;
