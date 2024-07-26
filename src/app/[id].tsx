import {useLocalSearchParams} from 'expo-router';
import { View, Text } from 'react-native';

const ProductDetailsScreen: React.FC = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{fontSize: 20}}>Product Details Screen for {id} </Text>
    </View>
  );
};

export default ProductDetailsScreen;