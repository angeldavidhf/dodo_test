import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { AppLoading } from 'expo';

import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../redux/users/actions';


function ListUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const { user } = useSelector(state => state);

  if (user.users.length > 0) {
    return (
      <View style={styles.container}>
        <FlatList
          data={user.users}
          keyExtractor = { (item, index) => index.toString() }
          renderItem={({item}) => (
            <View style={styles.grid}>
              <View>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: item.avatar,
                  }}
                />
              </View>
              <View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginLeft: 15 }}>
                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Nombre: </Text>
                  <Text style={styles.text}>{item.first_name}</Text>                    
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginLeft: 15 }}>
                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Email: </Text>
                  <Text style={styles.text}>{item.email}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
  else {
    return (
      <AppLoading />
    );
  }
}

export default ListUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50  
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 14,
  },
  grid:{
    paddingTop: 3,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 3,
    backgroundColor: 'rgba(247,247,247,1.0)',
    elevation: 1,
    borderWidth: .5,
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
})