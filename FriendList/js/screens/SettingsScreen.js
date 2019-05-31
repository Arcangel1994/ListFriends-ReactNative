import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

import SettingsItem from '../components/SettingsItem'
import SettingsHeader from '../components/SettingsHeader'

export default class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <SectionList 
            sections={
              [
                {title: 'Version',
                data: [{key: '1', info: '1.0'}] },
                {title: 'Imprint', 
                data: [{key: '2', info: 'Miguel Muñoz'}, {key: '3', info: 'copyright 2019'}]},
              ]
            }
            renderItem={ ({item}) => <SettingsItem text={item.info} /> }
            renderSectionHeader={({section}) => <SettingsHeader text={section.title} /> }
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 30,
    },
  });
  