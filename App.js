import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const transactions = [
  { id: '1', name: 'Groceries', amount: 50, date: '2023-10-01' },
  { id: '2', name: 'Electricity Bill', amount: 75, date: '2023-10-02' },
  { id: '3', name: 'Rent', amount: 1200, date: '2023-10-03' },
];

const TransactionListScreen = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card containerStyle={styles.card}>
          <Icon name="receipt" type="material" size={40} color="#007bff" />
          <Card.Title style={styles.cardTitle}>{item.name}</Card.Title>
          <Text style={styles.cardText}>Amount: ${item.amount}</Text>
          <Text style={styles.cardText}>Date: {item.date}</Text>
          <Button
            title="View Details"
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
            buttonStyle={styles.button}
            icon={<Icon name="arrow-forward" color="#ffffff" />}
          />
        </Card>
      )}
    />
  </View>
);

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Icon name="info" type="material" size={40} color="#007bff" />
        <Card.Title style={styles.cardTitle}>Transaction Detail</Card.Title>
        <Text style={styles.detailText}>Name: {transaction.name}</Text>
        <Text style={styles.detailText}>Amount: ${transaction.amount}</Text>
        <Text style={styles.detailText}>Date: {transaction.date}</Text>
      </Card>
    </View>
  );
};

const SummaryScreen = () => {
  const totalExpenses = transactions.reduce((sum, item) => sum + item.amount, 0);
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Icon name="pie-chart" type="material" size={40} color="#007bff" />
        <Card.Title style={styles.cardTitle}>Summary</Card.Title>
        <Text style={styles.summaryText}>Total Expenses: ${totalExpenses}</Text>
      </Card>
    </View>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TransactionsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionList" component={TransactionListScreen} options={{ title: 'Transaction List' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Detail' }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Transactions') {
              iconName = 'list';
            } else if (route.name === 'Summary') {
              iconName = 'pie-chart';
            }
            return <Icon name={iconName} type="material" color={color} size={size} />;
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Transactions" component={TransactionsStackNavigator} />
        <Tab.Screen name="Summary" component={SummaryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    marginTop: 8,
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    marginTop: 10,
  },
  detailText: {
    fontSize: 18,
    color: '#444',
    marginVertical: 8,
  },
  summaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default App;
