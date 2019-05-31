import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function(props) {
    return (
        <Text style={styles.item}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    item: {
      color: 'dimgrey',
      fontSize: 18,
      padding: 5,
    },
  });
  