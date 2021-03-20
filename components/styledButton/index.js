import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './styles';

const styledButton = (props) =>{
    const {type,content,onPress} = props;
    const bgc = type === 'primary' ? 'black' : 'white';
    const tc = type === 'primary' ? 'white' : 'black';
    return(
        <View style={styles.container}>
          <Pressable
          style={[styles.button,{backgroundColor:bgc}]}
          onPress={()=>onPress()}
          > 
          <Text style={[styles.text,{color:tc}]}>{content}</Text>
          </Pressable>    
      </View>
    );
};

export default styledButton;
