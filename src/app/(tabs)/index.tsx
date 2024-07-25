import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';


const product = products[0];
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text style={styles.mo}>{product.name}</Text>
      <Text style={styles.price}> {product.price} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    margin: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  mo: {
    fontSize: 40,  
  },
  price: {
    fontSize: 32,  
    color: Colors.light.tint, 
    backgroundColor: 'yellow',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
