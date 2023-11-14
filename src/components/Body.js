import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, View} from 'react-native';

const Body = ({children}) =>{
  return <View style={styles.container}>{children}</View>
};
Body.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
 container:{
    flex:1,
    backgroundColor: '#FFF',
    margin:8
  },
});

export default Body;