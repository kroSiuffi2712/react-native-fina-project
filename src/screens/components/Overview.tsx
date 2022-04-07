import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';

interface IProps {
  title: string;
  release_date: string;
  overview: string;
}

const Overview = (props: IProps) => {
  const {title, release_date, overview} = props;
  return (
    <>
      <View style={styles.movieInfoContainer}>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.movieName}>{title}</Text>
          <Text style={styles.movieStat}>{release_date}</Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 14, marginTop: 14}}>
        <Text style={{color: 'white', opacity: 0.8, lineHeight: 20}}>
          {overview}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14,
  },
  movieName: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,
  },
  movieStat: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8,
  },
});
export default Overview;
