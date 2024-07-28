import {Stack, useLocalSearchParams, useRouter} from 'expo-router';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import products from '@/assets/data/products';
import {useState} from 'react';
import Button from '@/src/components/Button';
import { PizzaSize } from '@/src/types';
import {useCart} from '@/src/providers/CartProvider';

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('S');
  const { id } = useLocalSearchParams();
  const { addItem} = useCart();
  const router = useRouter();
  const product = products.find((product) => product.id.toString() === id);

  const addToCart = () => {
    if (product) {
      addItem(product, selectedSize);
      router.push('/cart');
    } else return
  };
  return (
    <View style={styles.container}>
       <Stack.Screen options={{ title: product?.name }} /> 
       <Image source={{uri: product?.image}} style={styles.image} />
      <Text style={styles.name}>{product?.name} </Text>
      <Text style={styles.price}>$ {product?.price} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  
});

export default ProductDetailsScreen;