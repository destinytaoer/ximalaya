import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@models/index';
import {RootStackNavigation} from '../../navigator';
import Carousel from './Carousel';

const mapStateToProps = ({home, loading}: RootState) => ({
  num: home.num,
  loading: loading.effects['home/asyncAdd'],
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;
// navigator 是由 navigation 传递的参数
interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

const Home: FC<IProps> = (props) => {
  const handlePress = () => {
    const {navigation} = props;
    navigation.navigate('Detail', {
      id: 1000, // 跳转并传递参数
    });
  };
  const handleAdd = () => {
    const {dispatch} = props;
    dispatch({
      type: 'home/add',
      payload: {
        num: 1,
      },
    });
  };
  const asyncAdd = () => {
    const {dispatch} = props;
    dispatch({
      type: 'home/asyncAdd',
      payload: {
        num: 2,
      },
    });
  };
  return (
    <View>
      <Text>Home{props.num}</Text>
      <Text>{props.loading && '正在加载中...'}</Text>
      <Button title="add" onPress={() => asyncAdd()} />
      <Button title="跳转到详情页" onPress={handlePress} />
      <Carousel />
    </View>
  );
};

export default connector(Home);
