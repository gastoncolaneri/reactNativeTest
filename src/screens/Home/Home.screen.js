import React, { useState, useContext, useEffect } from 'react';
import { Title, IconButton, Button } from 'react-native-paper';
import styles from './Home.styles';
import Table from '../../components/Table/Table.component';
import { View } from 'react-native';
import SwitcherContext from '../../context/SwitcherContext/SwitcherContext';

export default function Home() {
  const { getSwitcher, switcher } = useContext(SwitcherContext);

  return (
    <View
      style={[
        switcher ? styles.backgroundLight : styles.backgroundDark,
        styles.background,
      ]}
    >
      <Button
        icon={switcher ? 'weather-night' : 'white-balance-sunny'}
        size={50}
        mode="contained"
        style={[
          styles.switcherBtn,
          switcher ? styles.switcherLight : styles.switcherDark,
        ]}
        labelStyle={switcher ? styles.textLight : styles.textDark}
        onPress={() => {
          getSwitcher();
        }}
      >
        {switcher ? 'Dark mode' : 'Light mode'}
      </Button>
      <Title
        style={[styles.title, switcher ? styles.textLight : styles.textDark]}
      >
        Fruit Information
      </Title>
      <Table switcher={switcher} />
    </View>
  );
}
