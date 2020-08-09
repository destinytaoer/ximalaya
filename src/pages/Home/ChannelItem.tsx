import React, {FC, useCallback, memo} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {IChannel} from '@models/home';
import Icon from '@assets/iconfont/index';
import Touchable from '@components/Touchable';

interface IProps {
  data: IChannel;
  onPress: (data: IChannel) => void;
}

const ChannelItem: FC<IProps> = (props) => {
  const {data, onPress} = props;

  const handlePress = useCallback(() => {
    if (typeof onPress === 'function') {
      onPress(data);
    }
  }, [onPress, data]);

  return (
    <Touchable onPress={handlePress}>
      <View style={styles.container}>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {data.title}
          </Text>
          <Text style={styles.remark} numberOfLines={2}>
            {data.remark}
          </Text>
          <View style={styles.bottom}>
            <View style={styles.played}>
              <Icon name="listen" />
              <Text>{data.played}</Text>
            </View>
            <View style={styles.playing}>
              <Icon name="listen" />
              <Text>{data.playing}</Text>
            </View>
          </View>
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // elevation: 5, // Android 不支持阴影效果,只支持投影, 但是不好看
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#dedede',
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  remark: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#f8f8f8',
  },
  bottom: {
    flexDirection: 'row',
  },
  played: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  playing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default memo(ChannelItem);
