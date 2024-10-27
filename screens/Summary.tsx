import React from 'react';
import { View, Text } from 'react-native';

const mockTransactions = [
  { id: '1', name: 'Groceries', amount: 50 },
  { id: '2', name: 'Rent', amount: 500 },
  { id: '3', name: 'Electricity Bill', amount: 80 },
];

export default function Summary() {
  const totalExpenses = mockTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Total Expenses</Text>
      <Text style={{ fontSize: 32 }}>${totalExpenses}</Text>
    </View>
  );
}
