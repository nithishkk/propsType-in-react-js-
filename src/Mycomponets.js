import React from 'react';
import PropTypes from 'prop-types';

function MyComponent(props) {
  console.log(props)
  return <div>{props.message}</div>;
}

MyComponent.propTypes = {
  message: PropTypes.string.isRequired,
  num:PropTypes.number.isRequired,

};

export default MyComponent;