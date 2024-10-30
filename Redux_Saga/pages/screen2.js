import React, { useState , useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../components/home/homeStyle';
import sTask from '../components/home/TaskStyle';


import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsRequest} from '../reduxsaga/actions';


const Task = ({route, navigation}) => {
  const dispatch = useDispatch();

  const { jobs, loading, error } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJobsRequest());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }


  const hienThi =({item}) => {
    return(
       <TouchableOpacity style={sTask.viewTask}>
           <View style={{flexDirection:'row', alignItems:'center'}}>
              <Icon1
                 name={item.status ? 'checkbox-marked' : 'checkbox-blank-outline'}
                 size={30}
                 color={item.status ? 'green' : 'back'}
                 style={{marginRight:5}}
               />
           <Text style={{textAlign:'center'}}>{item.task}</Text>
           </View>
           <Icon name="pencil" size={24} color="red" />
       </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, padding: 10}}>
      <View style={sTask.header}>
        <View style={sTask.title}>
          <Image
            source={require('../assets/Rectangle.png')}
            style={{ with: 45, height: 45, borderRadius: 100 }}
          />
          <View style={sTask.text}>
            <Text style={sTask.hi}>Hi Twinkle</Text>
            <Text>Have agrate day a head </Text>
          </View>
        </View>
        <View style={sTask.inputText}>
          <Icon
            name="search"
            size={20}
            color="#000"
            style={{ marginRight: 5 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#888"
          />
        </View>
      </View>
      <View style={sTask.center}>
          <FlatList
                 data={jobs}
                 keyExtractor={(item) => item.id.toString()}
                 renderItem={hienThi}
           />
      </View>
      <View style={sTask.footer}>
          <TouchableOpacity style={sTask.button}
                           onPress={() => navigation.navigate('Add')}
          >
                <Text style={sTask.buttonText}>+</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};
export default Task;