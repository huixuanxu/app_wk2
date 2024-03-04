import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Albums</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#003060",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // Android Only
        elevation: 2,
      },
      textStyle: {
        fontSize: 20,
       color: "#D2E9FF"
      },

});
  
  export default Header;