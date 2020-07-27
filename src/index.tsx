import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '@navigator/index';

export default () => (
  <>
    <Navigator />
    <StatusBar // 设置 Android 状态栏样式
      backgroundColor="transparent"
      barStyle="dark-content"
      translucent
    />
  </>
);
