import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

// Mock transaction data
const transactions = [
  { id: '1', name: 'Groceries', amount: 50, date: '2023-10-01' },
  { id: '2', name: 'Electricity Bill', amount: 75, date: '2023-10-02' },
  { id: '3', name: 'Rent', amount: 1200, date: '2023-10-03' },
];

// Transactions List Screen
const TransactionListScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Transaction List</Text>
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
          <Text>${item.amount}</Text>
          <Text>{item.date}</Text>
          <Button
            title="View Details"
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          />
        </View>
      )}
    />
  </View>
);

// Transaction Detail Screen
const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Detail</Text>
      <Text>Name: {transaction.name}</Text>
      <Text>Amount: ${transaction.amount}</Text>
      <Text>Date: {transaction.date}</Text>
    </View>
  );
};

// Summary Screen
const SummaryScreen = () => {
  const totalExpenses = transactions.reduce((sum, item) => sum + item.amount, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text>Total Expenses: ${totalExpenses}</Text>
    </View>
  );
};

// Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TransactionsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionList" component={TransactionListScreen} options={{ title: 'Transactions' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Detail' }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Transactions" component={TransactionsStackNavigator} />
        <Tab.Screen name="Summary" component={SummaryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
});

export default App;
