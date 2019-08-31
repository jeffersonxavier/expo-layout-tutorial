import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './src/components/header';
import SubHeader from './src/components/subheader';
import ProductList from './src/components/product-list';
import Tabs from './src/components/tabs';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#F8F8FA'}}>
      <Header/>
      <ScrollView>
        <SubHeader/>
        <ProductList/>
      </ScrollView>
      <Tabs/>
    </View>
  );
}
