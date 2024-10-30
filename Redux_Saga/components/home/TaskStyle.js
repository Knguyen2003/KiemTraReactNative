import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';

const Stask = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent :'space-around',
    marginBottom :15,
  },
  title:{
    flexDirection :'row',
    flex :1,
    justifyContent :'flex-end',
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
  text:{
     alignItems :'center'
  },
  hi :{
     fontWeight :'bold'
  },
  center: {
    flex: 4,
  },
  task : {
    backgroundColor :'#d3d5d8',
    paddingVertical:15,
    paddingHorizontal:15,
    flexDirection :'row',
    height:50,
    width :'100%',
    justifyContent:'space-between',
    borderRadius :20,
    marginBottom:10,
  },
  viewTask :{
    backgroundColor:'lightgray', 
    paddingHorizontal:10,
    flexDirection:'row',
    justifyContent:'space-between', 
    marginBottom:10, 
    alignItems:'center', 
    borderRadius:10, 
    paddingVertical:10
  },
  footer: {
    flex: 2,
    alignItems :'center',
    justifyContent:'center'
  },
  button:{
    backgroundColor: '#00bdd6',
    width: 60,
    height :60,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonText:{
    fontSize :25,
  },
 
});
export default Stask;
