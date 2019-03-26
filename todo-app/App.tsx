import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform
} from "react-native";
import BackgroundImage from "./asset/img/backkground.jpg";

const mockdata = ["234234", "234234234", "234545434", "233452345"];

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BackgroundImage}
          style={{
            flex: 0.3,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            borderBottomColor: "black"
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "200",
              color: "white",
              opacity: 0.9,
              shadowOpacity: 0.5,
              marginLeft: 10
            }}
          >
            My Day
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              shadowOpacity: 0.5,
              marginBottom: 20,
              marginLeft: 10
            }}
          >
            March, 25
          </Text>
        </ImageBackground>
        <View
          style={{
            flex: 0.7,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderBottomColor: "black"
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#ffffff",
              marginBottom: Platform.OS === "android" ? 0 : 16,

              //iOS stuff
              shadowOffset: { width: 0, height: 2 },
              shadowColor: "rgba(0,0,0,0.03)",
              shadowOpacity: 1,
              shadowRadius: 4
            }}
          >
            <Text>Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f9ff",
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    borderColor: "#000",
    marginBottom: 10,
    marginLeft: "2%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  }
});
