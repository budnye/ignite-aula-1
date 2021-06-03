import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function SkillCard({ skill }) {
  return (
    <View style={styles.skillBox}>
      <Text style={styles.skillText}>{skill}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  skillText: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  skillBox: {
    marginVertical: 8,
    padding: 16,
    alignSelf: 'center',
    backgroundColor: '#1f1e25',
    borderRadius: 27,
    width: '100%',
  },
});
