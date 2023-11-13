import React from 'react';
import { Appbar } from 'react-native-paper';
import PropTypes from 'prop-types';

const Header = ({ title, goBack, children }) => {
  return (
    <Appbar.Header>
      {
        goBack &&
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content title={title} />
      {children && <>{children}</>}
    </Appbar.Header>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
  children: PropTypes.node,
  
};

export default Header;
