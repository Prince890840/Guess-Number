import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constant/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 20,
    color: Colors.accent500,
    textAlign: "center",
    fontFamily: "open-sans"
  },
});

export default InstructionText;
