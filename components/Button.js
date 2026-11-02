import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

const Button = ({ onPress, title, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabledButton]}
    >
      {title}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#495E57',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
});

export default Button;