import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {RowContainerForFlatList} from './RowContainerForFlatList';

const FlatListView = props => {
  return (
    <View style={myStyle.viewForList}>
      <FlatList
        data={props.data}
        extraData={props.extraData}
        renderItem={({item, index}) => {
          return (
            <RowContainerForFlatList
              onPressUpdate={() => props.onPressUpdate(item)}
              itemText={item}
              updateText="Update"
              onPressDelete={() => props.onPressDelete(item)}
            />
          );
        }}
      />
    </View>
  );
};

const myStyle = StyleSheet.create({
  viewForList: {
    flex: 4,
    backgroundColor: 'lightseagreen',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
});

export {FlatListView};