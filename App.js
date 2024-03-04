
import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image} from 'react-native';
import Header from "./src/comonents/Header";
import AlbumList from "./src/comonents/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar />
      <Header/>
      <AlbumList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;