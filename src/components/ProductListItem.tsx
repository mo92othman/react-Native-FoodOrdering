
import { StyleSheet, Image, Text, View } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '@/src/types';

type ProductListItemProps = {
  product: Product;
};

const defaultPizzaImage= 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

const ProductListItem = ({ product }:ProductListItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: product.image || defaultPizzaImage }} resizeMode='contain'/>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, 
    flex: 1,
    maxWidth: '50%',
  },
  image: {
    width: 150,
    // height: 200,
    aspectRatio: 1,
    marginBottom: 10,
  },
  productName: {
    color: Colors.dark.tint,
    fontSize: 18
  },
  productPrice: {
    fontSize: 24,
    color: Colors.light.tint,
    backgroundColor: 'yellow',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default ProductListItem;