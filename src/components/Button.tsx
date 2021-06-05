import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet, ButtonProps } from 'react-native';
import colors from '../theme/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string,
};

export default function Button({ title, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
