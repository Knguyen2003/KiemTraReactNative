import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../components/home/homeStyle';
import sTask from '../components/home/TaskStyle';
import sAdd from '../components/home/AddStyle';

import { useRecoilState } from 'recoil';
import { dataState } from '../recoil/atoms';


const Add = ({ navigation}) => {

  const [data, setData] = useRecoilState(dataState);
  const [task,setTask] = useState('');
  
  const addItem = async () => {
    try {
      const response = await fetch('https://67219f8298bbb4d93ca9023e.mockapi.io/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: task }), 
      });

      if (response.ok) {
        const addedItem = await response.json();
        setData(prevData => [...prevData, addedItem]);
        setTask(''); 
        navigation.goBack();
      } else {
        console.error('Error adding item:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 15 }}>
      {/* Header */}
      <View style={sAdd.header}>
        <View style={sAdd.top}>
          <Image
            source={require('../assets/Rectangle.png')}
            style={{ width: 45, height: 45, borderRadius: 100 }}
          />
          <View style={sTask.text}>
            <Text style={sTask.hi}>Hi Twinkle</Text>
            <Text>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      {/* Form Input */}
      <View style={sAdd.center}>
        <Text style={sAdd.addTitle}>ADD YOUR JOB</Text>
        <View style={sTask.inputText}>
          <Icon name="search" size={20} color="#000" style={{ marginRight: 5 }} />
          <TextInput
            style={styles.input}
            placeholder="Input your job"
            placeholderTextColor="#888"
            onChangeText={(text) => setTask(text)} 
            value={task}
          />
        </View>
        <TouchableOpacity style={sAdd.buttonView} onPress={addItem}>
          <Text style={sAdd.textButton}>FINISH -></Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={sAdd.footer}>
        <Image source={require('../assets/Image95.png')} />
      </View>
    </View>
  );
};

export default Add;
