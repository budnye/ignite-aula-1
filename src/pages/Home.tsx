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
import Button from '../components/Button';
import colors from '../theme/colors';

interface SkillData {
  id: string;
  name: string;
}

export default function Home() {
  const [user, setUser] = useState({
    name: 'Eduardo',
  });

  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('Good morning');

  const handleAddSkill = () => {

    if (newSkill.length < 1) {
      return;
    }
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setSkills(oldState => [data, ...oldState]);
    setNewSkill('');
  };

  const handleRemoveSkill = (id: string) => {
    setSkills( oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

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
          placeholderTextColor={colors.background}
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddSkill}  title="Add"/>
        <Text style={styles.listTitle}>My Skills</Text>
        <FlatList
          style={styles.list}
          data={skills}
          renderItem={({ item }) => <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)}/>}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    padding: 32,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  input: {
    color: colors.text,
    backgroundColor: colors.contrast,
    fontSize: 16,
    padding: 14,
    marginTop: 30,
    borderRadius: 7,
    maxHeight: 60,
    width: '100%',
  },
  listTitle: {
    color: colors.text,
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
    color: colors.text,
    fontSize: 10,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
});
