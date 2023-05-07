import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../constant/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  // takes as much space as can so flex: 1
  card: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: deviceWidth < 380 ? 18 : 32,
    backgroundColor: Colors.primary800,
    justifyContent: "center",

    // for the shadow effect of the box ( it is android specific concept so not supported in ios)
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
