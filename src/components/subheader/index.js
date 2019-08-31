import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';
import Button from '../button';

const SubHeader = () => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{uri: 'https://i.ytimg.com/vi/7Xu_s1YJhyg/maxresdefault.jpg'}}/>
    
    <View style={styles.profileInfo}>
      <Text style={styles.name}>Fulana de Tal</Text>
      <Text style={styles.bio}>Editorial Director @sssense. Fashion addict & notorius shoe connossieur.</Text>

      <View style={styles.buttonContainer}>
        <Button style={styles.firstButton}>Message</Button>
        <Button type="outline">Follow</Button>
      </View>
    </View>
  </View>
);

export default SubHeader;
  