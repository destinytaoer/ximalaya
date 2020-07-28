import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@pages/Home/index';
import {THEME_COLOR} from '@styles/color';

const Tabs = createMaterialTopTabNavigator();

const HomeTabs: FC = () => {
  return (
    <Tabs.Navigator
      lazy // 懒加载
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
          backgroundColor: THEME_COLOR,
        },
        activeTintColor: THEME_COLOR,
        inactiveTintColor: '#333',
      }}>
      <Tabs.Screen name="Home" component={Home} options={{title: '推荐'}} />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
