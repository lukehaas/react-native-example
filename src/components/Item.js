import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeItem as removeItemAction } from '../store/basket/actions';


class Item extends Component {
  removeItem(sku) {
    const { removeFromBasket } = this.props;
    removeFromBasket({ sku });
  }

  render() {
    const { name, image, price, sku } = this.props;
    return (
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.inner}>
          <Text style={styles.title}>
            {name}
          </Text>
          <View>
            <Text style={styles.price}>{`£${price}`}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.remove} onPress={() => this.removeItem(sku)}>
          <Text style={styles.removeTxt}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sku: PropTypes.string.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  inner: {
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#9ea6bc',
    fontSize: 16,
  },
  price: {
    color: '#9ea6bc',
    fontSize: 13,
  },
  remove: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  removeTxt: {
    color: '#9ea6bc',
    fontSize: 16,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  removeFromBasket: removeItemAction,
}, dispatch);

export default connect(null, mapDispatchToProps)(Item);
