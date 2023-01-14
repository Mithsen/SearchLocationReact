import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import colors from '../constants/colors';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLocationData} from '../store/slices/locationDataSlice';

const GooglePlacesInput = () => {
  const dispatch = useDispatch();
  return (
    <GooglePlacesAutocomplete
      enablePoweredByContainer={false}
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        dispatch(setLocationData(details));
      }}
      fetchDetails={true}
      textInputProps={{
        placeholderTextColor: colors.darkSilver,
        returnKeyType: 'search',
      }}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
      styles={styles.googlePlacesAutocomplete}
    />
  );
};

export default GooglePlacesInput;

const styles = StyleSheet.create({
  googlePlacesAutocomplete: {
    container: {
      padding: 10,
    },
    textInput: {
      height: 44,
      color: colors.darkCharcoal,
      fontSize: 16,
      borderWidth: 1,
      borderColor: 'gray',
      fontSize: 18,
    },
  },
});
