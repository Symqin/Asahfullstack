import PropTypes from 'prop-types';
import React from 'react';

function SayHello({ name, age }) {
  return <p>Hello, {name}! You are {age}.</p>;
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

class KatakanHalo extends React.Component {
    render() {
        const { name, age } = this.props;

        return <p>Hello, {name}! You are {age}.</p>;
    }
}

KatakanHalo.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

export { SayHello, KatakanHalo };