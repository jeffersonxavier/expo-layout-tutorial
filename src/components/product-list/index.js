import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Product from './product';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: 'https://cdn.shopify.com/s/files/1/2693/5196/products/hat_front_1024x1024_2x_f95c4ed4-e7b6-4496-b981-0606fd0e9514_530x@2x.png',
          title: 'Acne Studios',
          description: 'Andrea nappa dusty pink',
          price: 'R$50,00',
        },
        {
          id: 2,
          image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
          title: 'Acne Studios',
          description: 'Lain pop sky blue',
          price: 'R$70,00',
        },
        {
          id: 3,
          image: 'https://cdn.shopify.com/s/files/1/2693/5196/products/hat_front_1024x1024_2x_f95c4ed4-e7b6-4496-b981-0606fd0e9514_530x@2x.png',
          title: 'Acne Studios',
          description: 'Andrea nappa dusty pink',
          price: 'R$30,00',
        },
        {
          id: 4,
          image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
          title: 'Acne Studios',
          description: 'Lain pop sky blue',
          price: 'R$70,00',
        }
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.products.map(product => <Product key={product.id} product={product}/>)}
      </View>
    );
  }
}
