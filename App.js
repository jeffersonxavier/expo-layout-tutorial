import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import SubHeader from './src/components/subheader';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header/>
      <SubHeader/>
    </View>
  );
}
