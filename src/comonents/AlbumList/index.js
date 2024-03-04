import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import albums from "../../json/albums.json";
import AlbumDetail from "../AlbumDetail";

const Albumlist = () => {
    console.log('rendering albumlist...');

    return (
        <ScrollView>
             <AlbumDetail album = {albums[0]} />
             <AlbumDetail album = {albums[1]} />
             <AlbumDetail album = {albums[2]} />
             <AlbumDetail album = {albums[3]} />
             <AlbumDetail album = {albums[4]} />
       
        </ScrollView>
       
    );
  };

  const styles = StyleSheet.create({
    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        justifyContent:"flex-start"
      },
      thumbnailStyle: {
        height: 50,
        width: 50,
        margin:5
      },
      headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 10,
      },
      cardContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
      },
      cardSectionStyle: {
        padding: 5,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderBottomWidth: 1,
      },
      imageStyle: {
        height: 300,
        width: null,
      },
  });

  export default Albumlist;