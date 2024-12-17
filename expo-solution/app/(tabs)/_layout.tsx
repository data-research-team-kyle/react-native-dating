import React from 'react';
import { View, Text, Platform } from 'react-native';

import { Image } from 'expo-image';
import { Tabs } from 'expo-router'; 

import { useTheme } from '@/theme/ThemeProvider'
import { COLORS, icons, FONTS, SIZES } from '../../constants';

const TabLayout = () => {
  const { dark } = useTheme();

  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="orders" />
      <Tabs.Screen name="wallet" />
      <Tabs.Screen name="profile" />
    </Tabs>
  )
};

export default TabLayout;