import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

const MyContainer = props => {
  return (
    <View style={myStyle.mainContainer}>
      <View style={myStyle.viewForInput}>
        <TextInput
          style={myStyle.textInput}
          value={props.myValue}
          placeholder="Enter Your Task"
          onChangeText={props.onChangeText}
        />
        <TouchableOpacity style={myStyle.addButton} onPress={props.myAddButton}>
          <Text style={myStyle.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View style={myStyle.viewForList}>
        <FlatList
          data={props.data}
          extraData={props.extraData}
          keyExtractor={props.keyExtractor}
          renderItem={({item, index}) => {
            return (
              <View style={myStyle.listView}>
                <Text style={myStyle.listItemStyle}>{item}</Text>
                <TouchableOpacity
                  style={myStyle.updateButton}
                  onPress={() => props.myUpdateButton(item)}>
                  <Text style={myStyle.updateButtonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={myStyle.deleteButton}
                  onPress={() => props.myDeleteButton(item)}>
                  <Image
                    style={myStyle.deleteButtonImage}
                    source={{
                      uri:
                        'http://sttwm.files.wordpress.com/2014/04/delete-300x300.jpg',
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const myStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewForInput: {
    backgroundColor: 'orange',
    flex: 2,
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  viewForList: {
    flex: 4,
    backgroundColor: 'lightseagreen',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    width: '70%',
    backgroundColor: 'lavender',
    height: 50,
    borderRadius: 40,
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'steelblue',
    width: '20%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
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
    backgroundColor: 'yellow'
  },
  updateButtonText: {
    fontSize: 27,
    fontWeight: '600',
  },
});

export {MyContainer};
