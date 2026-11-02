import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image resizeMode="contain" source={require('../assets/little-lemon-logo.png')} style={styles.logo}/>
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable onPress={() => navigation.navigate('Subscribe')} style={styles.button}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff', justifyContent: 'space-between' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { height: 200, width: 200, marginBottom: 20 },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#333' },
  button: { backgroundColor: '#495E57', padding: 16, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default WelcomeScreen;