import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  StudentSignUpScreen from './screens/StudentSignUpScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
    <View style={styles.container}>
      <StudentSignUpScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
