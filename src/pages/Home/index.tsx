import React, {FC, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@models/index';
import {RootStackNavigation} from '../../navigator';
import Carousel from './Carousel';
import Guess from './Guess';

const mapStateToProps = ({home, loading}: RootState) => ({
  carousels: home.carousels,
  loading: loading.effects['home/fetchCarousels'],
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;
// navigator 是由 navigation 传递的参数
interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

const Home: FC<IProps> = (props) => {
  const {carousels, dispatch} = props;

  // 请求轮播图数据
  useEffect(() => {
    dispatch({
      type: 'home/fetchCarousels',
    });
  }, [dispatch]);

  return (
    <ScrollView>
      <Carousel data={carousels} />
      <Guess />
    </ScrollView>
  );
};

export default connector(Home);
