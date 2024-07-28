import { View, Text, Platform, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {useCart} from '@/src/providers/CartProvider';
import CartListItem from '../components/CartListItem';
import Button from '../components/Button';

const CartScreen = () => {

  const { items, total } = useCart();
  console.log(total)

  return (
    <View style={{padding:10}}>
      <FlatList data= {items}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      contentContainerStyle={{gap: 10}}
      />
       <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop:10}}>Total: ${total.toFixed(2)}</Text>
      <Button text="Checkout" onPress={() => {}} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen