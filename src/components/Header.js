import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.bodyText}>
      {'Cart'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C3345',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    alignSelf: 'stretch',
  },
  bodyText: {
    color: '#9ea6bc',
    fontSize: 18,
  },
});

export default Header;
