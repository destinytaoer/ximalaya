import React, {FC, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert} from 'react-native';
import {IGuess} from '@models/home';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@models/index';
import Touchable from '@components/Touchable';
import Icon from '@assets/iconfont/index';

const mapStateToProps = ({home}: RootState) => {
  return {
    guess: home.guess,
  };
};

const connector = connect(mapStateToProps);

// 得到从 model 中注入到 props 的 state 的类型, 用于限制 props
type ModelState = ConnectedProps<typeof connector>;

const Guess: FC<ModelState> = (props) => {
  const {guess, dispatch} = props;

  const fetchData = useCallback(() => {
    dispatch({
      type: 'home/fetchGuess',
    });
  }, [dispatch]);

  // ComponentDidMount: 获取 guess 数据
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 列表头部
  const renderHeader = useCallback(() => {
    return (
      <View style={styles.header}>
        <View style={styles.like}>
          <Icon name="like" />
          <Text style={styles.likeTitle}>猜你喜欢</Text>
        </View>
        <View style={styles.more}>
          <Text style={styles.moreText}>更多</Text>
          <Icon name="more" color="#6f6f6f" />
        </View>
      </View>
    );
  }, []);

  // 列表尾部
  const renderFooter = useCallback(() => {
    return (
      <Touchable onPress={() => fetchData()}>
        <View style={styles.footer}>
          <Icon name="next-batch" color="red" />
          <Text style={styles.nextPatchText}>换一批</Text>
        </View>
      </Touchable>
    );
  }, [fetchData]);

  const renderItem = useCallback(({item}: {item: IGuess}) => {
    return (
      <Touchable
        style={styles.item}
        onPress={() => {
          Alert.alert('点击');
        }}>
        <View style={styles.item}>
          <Image style={styles.img} source={{uri: item.image}} />
          <Text numberOfLines={2}>{item.title}</Text>
        </View>
      </Touchable>
    );
  }, []);

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        numColumns={3}
        data={guess}
        renderItem={renderItem}
        // 使用了 numColumns 之后不能使用这个属性
        // keyExtractor={(item) => item.id}
      />
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
  },
  item: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 10,
  },
  img: {
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeTitle: {
    marginLeft: 5,
    color: '#333',
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreText: {
    color: '#6f6f6f',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  nextPatchText: {
    marginLeft: 5,
  },
});

export default connector(Guess);
