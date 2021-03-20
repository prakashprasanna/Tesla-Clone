import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import CarItem from '../carItem'
import Cars from './cars'

const CarsList = (props) =>{
    return(
        <View style={styles.container}>
            <FlatList 
            data={Cars}
            renderItem={({item}) => <CarItem car={item} /> }
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
      </View>
    );
};

export default CarsList;