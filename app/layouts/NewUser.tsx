import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../redux/users/actions';


const NewUser = () => {
  const dispatch = useDispatch();
  const [ name, onChangeName ] = useState('')
  const [ job, onChangeJob ] = useState('')

  const { user } = useSelector(state => state);

  console.log(user.user);

  function createUser() {
    dispatch(addUser({ name, job }));
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}> Nuevo Usuario </Text>
      <View>
        <TextInput 
          placeholder="Nombre" 
          style={styles.inputStyle} 
          value={name}
          onChangeText={(text) => onChangeName(text)}
        />
        <TextInput 
          placeholder="Trabajo" 
          style={styles.inputStyle} 
          value={job}
          onChangeText={(text) => onChangeJob(text)}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Agregar" onPress={createUser}></Button>
      </View>
    </View>
  );
}

export default NewUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  formLabel: {
    fontSize: 20,
    color: '#000',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  buttonStyle: {
    color: '#fff',
    marginTop: 20,
    padding: 20
  }
})