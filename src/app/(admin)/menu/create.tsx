import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import Button from '@/src/components/Button'
import { useState } from 'react'
import defaultPizzaImage from '@/src/components/ProductListItem'
import Colors from '@/src/constants/Colors'
import * as ImagePicker from 'expo-image-picker';
import { Stack } from 'expo-router'

const createProductScreen = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState('')
  const [image, setImage] = useState<string | null>(null)

  const resetFields = () => {
    setName('')
    setPrice('')
  }

  const validateFields = () => {
    if (!name) {
      setError('Please enter a name')
      return false
    }
    if (!price) {
      setError('Please enter a price')
      return false
    }
    if (isNaN(parseFloat(price))) {
      setError('Please enter a valid price')
      return false
    }
    setError('')
    return true
  }

  const onCrateProduct = () => {
    if (!validateFields()) {
      return}
    console.log(name)
    // Save to database
    resetFields()
  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  
  return (
    <View style={styles.container}>
      <Stack.Screen  options={{ title: 'Create a dish'}} />
      <Image source={{uri : image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'}} style={styles.image}/>
      <Text style={styles.textButton} onPress={pickImage}>Select an image</Text>
      <Text style={styles.lebel}>Name</Text>
      <TextInput placeholder="Product Name" style={styles.input} value={name} onChangeText={setName}/>
      <Text style={styles.lebel}>Price</Text>
      <TextInput placeholder="(9.99$" style={styles.input} keyboardType='numeric' value={price} onChangeText={setPrice} />
      <Text style={{color: 'red'}}>{error}</Text>
      <Button text="Create Product" onPress={onCrateProduct}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  lebel: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  image: {
    width: '70%',
    aspectRatio: 1,
    alignSelf: 'center',
    borderRadius: 20,
  },
  textButton: {
  alignSelf: 'center',
  fontWeight: 'bold',
  color: Colors.light.tint,
  marginVertical: 10

  }

})
export default createProductScreen