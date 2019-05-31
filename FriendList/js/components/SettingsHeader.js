import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function(props) {
    return (
        <Text style={styles.section}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    section:{
        backgroundColor: 'whitesmoke',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        fontSize: 18,
        padding: 5,
      },
  });
  