import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { AnyAction, Dispatch } from 'redux';
import { connect } from "react-redux";
import { IUsers } from '../redux/users/types';
import { getUsers } from '../redux/users/actions';

interface ListUserProps {
  getUsers(): typeof getUsers;
}

class ListUser extends Component<ListUserProps, IUsers[]> {
  componentDidMount(){
    this.props.getUsers();

    console.log("LAYOUT LIST: ", this.state);
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: IUsers[]) => ({
  users: state
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  getUsers:() => dispatch<any>(getUsers())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUser);

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