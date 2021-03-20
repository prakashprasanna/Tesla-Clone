import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import StyledButton from '../styledButton'
import styles from './styles';

const carItem = (props) =>{
  const {title,subtitle,image,underline} = props.car;
    return(
        <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image} />
        <View style={styles.titles}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle} <Text style={styles.underline}>{underline}</Text></Text>
        </View>
        <View style={styles.bContainer}>
        <StyledButton type='primary' content='custom order' onPress={()=>{console.warn('custom order')}}/>
        <StyledButton type='secondary' content='existing inventory' onPress={()=>{console.warn('existing inventory')}}/>
        </View>

      </View>
    );
};

export default carItem;


