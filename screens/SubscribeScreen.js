import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, StyleSheet, Alert } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          resizeMode="contain" 
          source={require('../assets/little-lemon-logo-grey.png')} 
          style={styles.logo}
        />
        <Text style={styles.title}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <TextInput 
          autoCapitalize="none" 
          keyboardType="email-address" 
          onChangeText={setEmail} 
          placeholder="Type your email" 
          style={styles.input} 
          value={email}
        />
        <Pressable 
          disabled={!validateEmail(email)} 
          onPress={() => Alert.alert('Success', 'Thanks for subscribing, stay tuned!')} 
          style={[styles.button, !validateEmail(email) && styles.disabledButton]}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 24 
  },
  content: { 
    flex: 1, 
    alignItems: 'center', 
    marginTop: 20 
  },
  logo: { 
    height: 100, 
    width: 100, 
    marginBottom: 20 
  },
  title: { 
    fontSize: 18, 
    textAlign: 'center', 
    marginBottom: 30, 
    color: '#333' 
  },
  input: { 
    height: 45, 
    width: '100%', 
    borderColor: '#495E57', 
    borderWidth: 1, 
    borderRadius: 8, 
    paddingHorizontal: 12, 
    marginBottom: 20 
  },
  button: { 
    backgroundColor: '#495E57', 
    width: '100%', 
    padding: 16, 
    borderRadius: 8, 
    alignItems: 'center' 
  },
  disabledButton: { 
    backgroundColor: '#cccccc' 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
});

export default SubscribeScreen;