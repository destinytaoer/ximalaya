import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '@pages/Detail';
import {Platform, StyleSheet, StatusBar} from 'react-native';

export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  }; // 用来定义页面组件需要接收的参数, 只能是 undefined 或者 object
  Detail: {
    id: number;
  };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

// Stack 包含两个组件: Navigator & Screen
// 传递的泛型用来限制页面之间接收的参数
// 这个泛型的只能是一个类型别名, 需要能够继承 Record<string, object | undefined>
// type str = Record<string, object | undefined>; 两个泛型,一个是 key 的类型,另一个是值的类型
// {[x:string]: object|undefined}
let Stack = createStackNavigator<RootStackParamList>();

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="float" // 头部导航的模式, none 则不显示, float 指导航栏定位在那里,不跟随屏幕, 而 screen 则是指导航栏会始终跟随屏幕一起
        // 配置所有页面导航器的样式
        screenOptions={{
          headerTitleAlign: 'center',
          // 动画效果
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 设置 Android 跳转动画为水平
          gestureEnabled: true, // Android 启用手势进行返回
          gestureDirection: 'horizontal', // Android 手势水平
          // headerStatusBarHeight:
          //  StatusBar.currentHeight,
          headerStyle: {
            // 去掉 Android 滑动过程中出现的阴影,以及导航栏的底部边框
            ...Platform.select({
              android: {
                elevation: 0,
                borderBottomWidth: StyleSheet.hairlineWidth,
              },
            }),
          },
        }}>
        {/* Navigator 用来包含 Screen */}
        {/* Screen 的 options 属性与 Navigator 的 screenOptions 是一样的 */}
        <Stack.Screen
          options={{headerTitle: '首页'}}
          name="BottomTabs"
          component={BottomTabs}
        />
        <Stack.Screen
          options={{headerTitle: '详情'}}
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
