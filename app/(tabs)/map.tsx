import { useState } from "react";
import { Text, View } from "react-native";

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function Map() {
  // Create a state for region
  const [region, setRegion] = useState({
    latitude: 60.200692,
    longitude: 24.934302,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221,
  });
  return (
    // Use region prop in the MapView and the value comes from region state
    <MapView style={{ width: "100%", height: "100%" }} region={region}>
      <Marker coordinate={region} />
    </MapView>
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>Map Screen</Text>
    // </View>
  );
}
