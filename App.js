import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeFromScreen from './screens/ResumeFrom'; // add
import ResumeDetailScreen from './screens/ResumeDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeFrom" options={{title:'ResumeFrom'}} component={ResumeFromScreen} />
        <Stack.Screen name="ResumeDetail" options={{title:'ResumeDetail'}} component={ResumeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;