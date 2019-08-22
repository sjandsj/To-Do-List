import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInputContainer} from './TexInputContainer';
import {FlatListView} from './FlatListView';

const MyContainer = props => {
  return (
    <View style={myStyle.mainContainer}>
      <TextInputContainer
        myValue={props.myValue}
        onChangeText={props.onChangeText}
        onPress={props.myAddButton}
      />
      <FlatListView
        data={props.data}
        extraData={props.extraData}
        onPressUpdate={item => props.myUpdateButton(item)}
        onPressDelete={item => props.myDeleteButton(item)}
      />
    </View>
  );
};

const myStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {MyContainer};
