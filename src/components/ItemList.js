import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Item from './Item';

class ItemList extends Component {
  render() {
    const { items } = this.props;
    return (
      <View style={styles.container}>
        {items.map(item => <Item {...item} key={item.sku} />)}
      </View>
    );
  }
}

Item.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    sku: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired).isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
});

const mapStateToProps = state => ({
  items: state.basket.items,
});

export default connect(mapStateToProps)(ItemList);
