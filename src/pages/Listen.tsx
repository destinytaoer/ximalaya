import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '../navigator';

// navigator 是由 navigation 传递的参数
interface Props {
  navigation: RootStackNavigation;
}

const Listen: FC<Props> = (props) => {
  const handlePress = () => {
    const {navigation} = props;
    navigation.navigate('Detail', {
      id: 1000, // 跳转并传递参数
    });
  };
  return (
    <View>
      <Text>Listen</Text>
      <Button title="跳转到详情页" onPress={handlePress} />
    </View>
  );
};

export default Listen;
