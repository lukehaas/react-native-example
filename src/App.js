import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import store from './store';
import { Header, ItemList } from './components';

export default class App extends React.Component {
  render() {
    return (
      <Provider {...{ store }}>
        <SafeAreaView style={styles.container}>
          <Header />
          <ScrollView style={styles.scrollView}>
            <ItemList />
          </ScrollView>
        </SafeAreaView>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23262F',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    alignSelf: 'stretch',
  },
});
