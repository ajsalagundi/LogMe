import React, {useState} from "react";
import { useFonts } from "expo-font";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { CSS_CONSTS, FONT_SIZE, HEIGHT, WIDTH } from "../constants";
import NavBar from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DataEntryForm = (props) => {
  let [fonts] = useFonts({
    "Reem-Kufi": require("../assets/fonts/ReemKufi-Regular.ttf"),
  });

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  if (!fonts) {
    return null;
  } else {
    return (
      <View style={styles.formScreen}>
        <NavBar />
        <View style={styles.controlButtons}>
          <Ionicons
            name="chevron-back"
            size={30}
            color={CSS_CONSTS.PRIMARY_COLOR}
            style={styles.backButton}
            onPress={() => props.navigation.navigate("Dashboard")}
          />
          <MaterialIcons
            name="info-outline"
            size={30}
            color={CSS_CONSTS.PRIMARY_COLOR}
            style={styles.infoButton}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.header}>Log what you did</Text>
          <View style={styles.userInputs}>
            <View style={styles.usernameInput}>
              <FontAwesome5
                name="user"
                size={24}
                color="black"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                onChangeText={(e) => setusername(e)}
                value={username}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={"Username"}
              />
            </View>
            
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  formScreen: {
    flex: 1,
    height: HEIGHT,
    width: WIDTH,
  },
  controlButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
    height: 0.075 * HEIGHT,
    width: WIDTH,
  },
  backButton: {
    marginLeft: "10%",
  },
  infoButton: {
    marginRight: "10%",
  },
  form: {
    height: 0.825 * HEIGHT,
    marginLeft: "10%",
	marginTop: "5%"
  },
  header: {
    fontFamily: "Reem-Kufi",
    fontSize: FONT_SIZE["2xl"],
  },
  userInputs: {
    marginTop: "10%",
    width: "80%",
    height: "20%",
    justifyContent: "center",
  },
  icon: {
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  usernameInput: {
    flex: 1,
    flexDirection: "row",
    borderColor: CSS_CONSTS.PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    flexDirection: "row",
    borderColor: CSS_CONSTS.PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default DataEntryForm;
