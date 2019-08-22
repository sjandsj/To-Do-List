import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const RowContainerForFlatList = props => {
  return (
    <View style={myStyle.listView}>
      <Text style={myStyle.listItemStyle}>{props.itemText}</Text>
      <TouchableOpacity
        style={myStyle.updateButton}
        onPress={props.onPressUpdate}>
        <Text style={myStyle.updateButtonText}>{props.updateText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={myStyle.deleteButton}
        onPress={props.onPressDelete}>
        <Image
          style={myStyle.deleteButtonImage}
          source={{
            uri: 'http://sttwm.files.wordpress.com/2014/04/delete-300x300.jpg',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const myStyle = StyleSheet.create({
  listView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  listItemStyle: {
    fontFamily: 'Times New Roman',
    fontSize: 30,
    fontWeight: '500',
    width: '60%',
  },
  deleteButton: {
    backgroundColor: 'lightseagreen',
    borderRadius: 35,
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  deleteButtonImage: {
    height: 35,
    width: 35,
    borderRadius: 35,
  },
  updateButton: {
    width: '25%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'yellow',
  },
  updateButtonText: {
    fontSize: 27,
    fontWeight: '600',
  },
});

export {RowContainerForFlatList};
