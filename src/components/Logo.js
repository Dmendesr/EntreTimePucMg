import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Logo = () =>{
  return <Image style={styles.image} source={require('../assets/Logotipo.png')}/>
};

const styles = StyleSheet.create({
 image:{
   width: 188,
   height: 188,
  },
});

export default Logo;