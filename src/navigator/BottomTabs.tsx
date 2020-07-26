import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp, TabNavigationState} from '@react-navigation/native';
import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import Icon from '@/assets/iconfont/index';
import {RootStackNavigation, RootStackParamList} from './';

export type BottomTabsParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

// 这里的 Route 与普通的 Route 不一样,具有 state 属性
// 注意这里获取的 Route 仍然是 stack navigator 传入的
type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState;
};

interface Props {
  navigation: RootStackNavigation;
  route: Route;
}

const tabs = createBottomTabNavigator<BottomTabsParamList>();

function getHeaderTitle(route: Route) {
  // 这里需要注意的是, route.name 获取到的是上一层的 Stack 路由的 name, 是 BottomTabs
  // 需要获取到当前的 tabs 路由名称,可以通过 state 中的 routes(保存的是所有路由的数组)
  // 然后通过 state 中的 index 标记当前路由索引,从而获得当前路由,然后通过 name 属性获取名称
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home';
  // 这里之所以再加一个判断, 是为了防止从其他页面直接跳转到当前 tab 页的情况, 需要往 BottomTabs 组件传一个 screen 参数, 表示路由名

  switch (routeName) {
    case 'Home':
      return '首页';
    case 'Listen':
      return '我听';
    case 'Found':
      return '发现';
    case 'Account':
      return '我的';
  }
}

const BottomTabs = ({navigation, route}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
    });
  }, [navigation, route]);

  return (
    <tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#f86442',
      }}>
      <tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <tabs.Screen
        name="Listen"
        component={Listen}
        options={{
          tabBarLabel: '我听',
          tabBarIcon: ({color, size}) => (
            <Icon name="listen" color={color} size={size} />
          ),
        }}
      />
      <tabs.Screen
        name="Found"
        component={Found}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({color, size}) => (
            <Icon name="discover" color={color} size={size} />
          ),
        }}
      />
      <tabs.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </tabs.Navigator>
  );
};

export default BottomTabs;
