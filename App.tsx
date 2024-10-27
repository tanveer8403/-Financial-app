import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from './screens/TransactionsList';
import TransactionDetail from './screens/TransactionDetail';
import Summary from './screens/Summary';

// Define types for navigation parameters
export type RootStackParamList = {
  TransactionsList: undefined;
  TransactionDetail: { transaction: { id: string; name: string; amount: number; date: string } };
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

// Transactions Stack Navigator
function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsList} options={{ title: 'Transactions' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Detail' }} />
    </Stack.Navigator>
  );
}

// Tab Navigator
function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Transactions" component={TransactionsStack} />
      <Tab.Screen name="Summary" component={Summary} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}
