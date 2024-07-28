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
       <Text style={styles.price}> Select a size </Text>
      <View style={styles.sizes}>
     
      {sizes.map((size) => (
         <Pressable 
         onPress={() => setSelectedSize(size)}
         key={size}
         style={[styles.size, selectedSize === size ? {backgroundColor: 'gainsboro'} : {backgroundColor: 'white'}]}>
        <Text style={[styles.sizeText, selectedSize === size ? {color: 'blue', fontWeight:'bold'} : {color: 'black'}]} >{size}</Text>
        </Pressable>
      ))}
     </View>
      <Text style={styles.price}>$ {product?.price} </Text>
      <Button text="Add to Cart" onPress={addToCart} />
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
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 40,
    
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 60,
    aspectRatio: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
  },
});

export default ProductDetailsScreen;