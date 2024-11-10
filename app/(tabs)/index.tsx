import { useState } from "react";
import { View, FlatList } from "react-native";
import { PaperProvider, Appbar, Button, Text, Card } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const [repositories, setRepositories] = useState([]);
  // console.log(repositories);

  const handleFetch = () => {
    fetch(`https://bri3.fvh.io/opendata/uiras/uiras_latest.geojson`)
      .then((response) => {
        if (!response.ok)
          throw new Error("Error in fetch: " + response.statusText);

        return response.json();
      })
      .then((data) => setRepositories(data.features))
      .catch((err) => console.error(err));
  };
  return (
    <PaperProvider>
      <Appbar mode="medium" elevated>
        <Appbar.Content title="WinterSwim" />
      </Appbar>
      <Button mode="contained" icon="search-web" onPress={handleFetch}>
        Search
      </Button>
      <FlatList
        style={{ marginTop: 10, width: "90%" }}
        data={repositories}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 10 }}>
            <Card.Title title={item.properties.name} />
            <Card.Content>
              <Text variant="bodyMedium">
                {item.properties.measurement
                  ? item.properties.measurement.temp_water
                  : "Ei mittaustulosta"}
              </Text>
            </Card.Content>
          </Card>
        )}
      />
      <StatusBar style="auto" />
    </PaperProvider>
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>Home Screen</Text>
    // </View>
  );
}
