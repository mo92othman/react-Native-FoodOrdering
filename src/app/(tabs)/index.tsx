import { StyleSheet, ScrollView } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

// MenuScreen Component
const MenuScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product, index) => (
        <ProductListItem key={index} product={product} />
      ))}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
  }
});

export default MenuScreen;