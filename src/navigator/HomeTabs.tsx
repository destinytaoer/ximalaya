import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';

const Tabs = createMaterialTopTabNavigator();

const HomeTabs: FC = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        scrollEnabled: true, // 放不下时可以滚动
        tabStyle: {
          width: 80,
        },
        indicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: '#f86442',
        },
      }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Home1" component={Home} />
      <Tabs.Screen name="Home2" component={Home} />
      <Tabs.Screen name="Home3" component={Home} />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
