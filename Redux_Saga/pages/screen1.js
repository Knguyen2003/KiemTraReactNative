


import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../components/home/homeStyle';



const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Image source={require('../assets/Image95.png')} />
      </View>

      <View style={styles.center}>
        <Text style={styles.textTitle}>MANGAGE YOUR TASK</Text>
        <View style={styles.inputText}>
          <Icon
            name="search"
            size={20}
            color="#000"
            style={{ marginRight: 5 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Task')}>
          <Text style={styles.buttonText}>GET STARTED -></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;