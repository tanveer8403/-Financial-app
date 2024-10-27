import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type TransactionDetailRouteProp = RouteProp<RootStackParamList, 'TransactionDetail'>;

type Props = {
  route: TransactionDetailRouteProp;
};

export default function TransactionDetail({ route }: Props) {
  const { transaction } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{transaction.name}</Text>
      <Text style={{ fontSize: 18 }}>Amount: ${transaction.amount}</Text>
      <Text style={{ fontSize: 18 }}>Date: {transaction.date}</Text>
    </View>
  );
}
