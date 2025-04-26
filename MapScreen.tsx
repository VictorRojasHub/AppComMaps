import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const addresses = [
    { latitude: -23.563210, longitude: -46.654250, title: "Ponto A" },
    { latitude: -23.562408, longitude: -46.655641, title: "Ponto B" },
    // Adicione mais endereços conforme necessário
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.563210, //onde carregará o mapa
          longitude: -46.654250,
          latitudeDelta: 0.0922, //o quanto irá aproximar na lat. e long -- zoom ----- 1 == planeta terra .5 metade do planeta
          longitudeDelta: 0.0421,
        }}
      >
        {addresses.map((place, index) => (      //gera vetor de marcadores dentro da lista
          <Marker
            key={index}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            title={place.title}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
