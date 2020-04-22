import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { AnyAction, Dispatch } from 'redux';
import { connect } from "react-redux";
import { IUser, UserResponseTypes } from '../redux/users/types';
import { addUser } from '../redux/users/actions';

interface CreateUserProps {
  addUser(newUser: IUser): typeof addUser;
}

class CreateUser extends Component<CreateUserProps, IUser> {
  componentDidMount(){
    this.props.addUser({
      name: 'Angel David',
      job: 'Developer'
    });

    console.log("LAYOUT CREATE: ", this.state);
  }
  
  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: IUser) => ({
  user: state
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  addUser:(newUser: IUser) => dispatch<any>(addUser(newUser))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})