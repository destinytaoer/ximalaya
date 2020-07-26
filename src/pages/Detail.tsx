import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@/navigator/index';

// route 也是 navigation 传入的参数
interface Props {
  // 类型是 RouteProp, 泛型是 navigator 中定义传参限制类型和组件名称,用来获取参数的限制类型
  route: RouteProp<RootStackParamList, 'Detail'>;
}

const Detail: FC<Props> = (props) => {
  const {route} = props;
  return (
    <View>
      <Text>Detail</Text>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default Detail;
