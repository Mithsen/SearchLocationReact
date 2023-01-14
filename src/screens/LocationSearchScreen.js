import React from 'react';
import { StyleSheet, View } from 'react-native';
import GooglePlacesInput from '../components/GooglePlacesInput';
import RNMapView from '../components/RNMapView';

export function LocationSearchScreen() {
  return (
    <View style={styles.mainContainer}>
      <RNMapView />
      <View style={styles.searchInputContainer}>
        <GooglePlacesInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1
  },
  searchInputContainer:{
    position: 'absolute', 
    top: 20, 
    width: '100%'
  }
})