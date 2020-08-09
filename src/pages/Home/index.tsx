import React, {FC, useEffect, useCallback} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@models/index';
import {RootStackNavigation} from '../../navigator';
import Carousel from './Carousel';
import Guess from './Guess';
import ChannelItem from './ChannelItem';
import {IChannel} from '@models/home';

const mapStateToProps = ({home, loading}: RootState) => ({
  carousels: home.carousels,
  loading: loading.effects['home/fetchCarousels'],
  channels: home.channels,
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;
// navigator 是由 navigation 传递的参数
interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

const Home: FC<IProps> = (props) => {
  const {carousels, channels, dispatch} = props;

  // 请求轮播图数据
  useEffect(() => {
    dispatch({
      type: 'home/fetchCarousels',
    });
  }, [dispatch]);

  // 请求频道列表数据
  useEffect(() => {
    dispatch({
      type: 'home/fetchChannels',
    });
  }, [dispatch]);

  const renderItem = useCallback(({item}: ListRenderItemInfo<IChannel>) => {
    return <ChannelItem data={item} />;
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <View>
        <Carousel data={carousels} />
        <Guess />
      </View>
    );
  }, [carousels]);

  return (
    <FlatList
      data={channels}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default connector(Home);
