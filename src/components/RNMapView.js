import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import constants from '../constants/constants';

const RNMapView = () => {

  const {locationData} = useSelector(state => state.locationData);
  const mapViewRef = useRef(null);
  
  useEffect(() => {
    //Animate to selected location
    if (mapViewRef && locationData) {
      mapViewRef.current?.animateToRegion({
        latitude: locationData.geometry.location.lat,
        longitude: locationData.geometry.location.lng,
        latitudeDelta: constants.mapLatitudeDelta,
        longitudeDelta: constants.mapLongitudeDelta,
      });
    }
  }, [locationData]);

  return (
    <MapView
      ref={mapViewRef}
      style={{flex: 1}}
      initialRegion={{
        latitude: constants.mapInitRegionLatitude, 
        longitude: constants.mapInitRegionLongitude,
        latitudeDelta: constants.mapLatitudeDelta,
        longitudeDelta: constants.mapLongitudeDelta,
      }}>
      {locationData && (
        <Marker
          coordinate={{
            latitude: locationData.geometry.location.lat,
            longitude: locationData.geometry.location.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default RNMapView;
