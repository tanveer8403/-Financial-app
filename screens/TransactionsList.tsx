import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type Transaction = { id: string; name: string; amount: number; date: string };

const mockTransactions: Transaction[] = [
  { id: '1', name: 'Groceries', amount: 50, date: '2024-10-01' },
  { id: '2', name: 'Rent', amount: 500, date: '2024-10-05' },
  { id: '3', name: 'Electricity Bill', amount: 80, date: '2024-10-10' },
];

type TransactionsListNavigationProp = StackNavigationProp<RootStackParamList, 'TransactionsList'>;

function TransactionsList() {
  const navigation = useNavigation<TransactionsListNavigationProp>();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={mockTransactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
              <Text>${item.amount}</Text>
              <Text>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default TransactionsList();
