import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const Product = ({ product: { image, title, description, price } }) => (
  <View style={styles.container}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);

export default Product;
