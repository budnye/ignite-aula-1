import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../theme/colors';


interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}
export default function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.skillBox} {...rest}>
      <Text style={styles.skillText}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skillText: {
    color: colors.lighter,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  skillBox: {
    marginVertical: 8,
    padding: 16,
    alignSelf: 'center',
    backgroundColor: colors.contrast,
    borderRadius: 27,
    width: '100%',
  },
});
