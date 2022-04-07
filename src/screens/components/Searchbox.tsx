import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import {searchType} from '../../types/enum/searchType';
import {useDispatch} from 'react-redux';
import {
  fetchMoviesByText,
  fetchMovies,
} from '../../store/actions/moviesActions';

interface IProps {
  type: searchType;
}

const Searchbox = (props: IProps) => {
  const {type} = props;
  const dispatch = useDispatch();

  const onSubmitEdit = (e: any) => {
    if (e.nativeEvent.text === '') {
      dispatch(fetchMovies());
    }
    dispatch(fetchMoviesByText(e.nativeEvent.text));
  };
  return (
    <View style={styles.SearchboxContainer}>
      <TextInput
        placeholder={`Search ${
          type === searchType.MOVIE ? 'Movies' : 'TV Shows'
        }`}
        placeholderTextColor="#666"
        style={styles.Searchbox}
        onSubmitEditing={(value: any) => onSubmitEdit(value)}
      />
      <IconFeather
        name="search"
        size={22}
        color="#666"
        style={styles.SearchboxIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchboxContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
  },
  Searchbox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  SearchboxIcon: {
    position: 'absolute',
    right: 20,
    top: 14,
  },
});
export default Searchbox;
