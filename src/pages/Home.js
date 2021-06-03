import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import SkillCard from '../components/SkillCard';

import Button from './../components/Button';

export default function Home() {
  const [user, setUser] = useState({
    name: 'Eduardo',
  });

  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);
  const [greeting, setGreeting] = useState([]);

  const handleAddSkill = () => {
    if (newSkill.length < 1) {
      return;
    }
    setSkills(oldState => [newSkill, ...oldState]);
    setNewSkill('');
  };

  useEffect(() => {
    const timeNow = new Date().getHours();
    if (timeNow < 12) {
      return setGreeting('Good morning');
    }
    if (timeNow >= 12 && timeNow < 18) {
      return setGreeting('Good afternoon');
    }
    setGreeting('Good night');
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{`Welcome, ${user.name}`}</Text>
        <Text style={styles.greeting}>{greeting}</Text>

        <TextInput
          value={newSkill}
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />
        <Button onPress={handleAddSkill} />
        <Text style={styles.listTitle}>My Skills</Text>
        <FlatList
          style={styles.list}
          data={skills}
          renderItem={({ item }) => <SkillCard skill={item} />}
          keyExtractor={(item, idx) => `id_${idx}`}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#121015',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#121015',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  input: {
    color: '#fff',
    backgroundColor: '#1f1e25',
    fontSize: 16,
    padding: 14,
    marginTop: 30,
    borderRadius: 7,
    maxHeight: 60,
    width: '100%',
  },
  listTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginVertical: 30,
  },
  list: {
    flex: 1,
    width: '100%',
  },
  greeting: {
    color: '#fff',
    fontSize: 10,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
});
