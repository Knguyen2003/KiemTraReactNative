import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';

const sAdd = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent :'space-around',
    marginBottom :15,
    alignItems:'flex-start'
  },
  top:{
     flexDirection :'row',
     flex :1,
     justifyContent :'flex-end',
     marginBottom:15,
  },
  inputText:{
    flexDirection: 'row',
    width: '100%',
    height:50,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderWidth :1,
    borderColor :'gray',
  },
  center: {
    flex: 3,
    alignItems :'center',
    justifyContent:'space-around'
  },
  addTitle:{
    fontWeight :'bold',
    fontSize:40,
  },
  footer: {
    flex: 5,
    justifyContent :'center',
    alignItems:'center'
  },
  buttonView:{
    backgroundColor: '#00bdd6',
    width:250,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius :10
  },
  textButton:{
    fontSize :25,
    color : 'white'
  },
 
});
export default sAdd;
