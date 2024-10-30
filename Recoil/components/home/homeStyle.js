import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#8353e2',
    textAlign: 'center',
  },
  inputText: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderWidth :1,
    borderColor :'gray',
    borderRadius:10,
  },
  input: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00bdd6',
    width: 200,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});
export default styles;
