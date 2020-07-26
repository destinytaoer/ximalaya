/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconAdd from './IconAdd';
import IconPlay from './IconPlay';
import IconLike from './IconLike';
import IconBack from './IconBack';
import IconPause from './IconPause';
import IconMore from './IconMore';
import IconAudio from './IconAudio';
import IconPlay1 from './IconPlay1';
import IconNextBatch from './IconNextBatch';
import IconAudio1 from './IconAudio1';
import IconAccount from './IconAccount';
import IconVolume from './IconVolume';
import IconPrevSong from './IconPrevSong';
import IconNextSong from './IconNextSong';
import IconFullscreen from './IconFullscreen';
import IconVolumeOff from './IconVolumeOff';
import IconVolumeUp from './IconVolumeUp';
import IconDiscover from './IconDiscover';
import IconTime from './IconTime';
import IconListen from './IconListen';
import IconIconPlay from './IconIconPlay';
import IconCollectionStar from './IconCollectionStar';
import IconMessage from './IconMessage';
import IconCollection from './IconCollection';
import IconHome from './IconHome';

export type IconNames = 'add' | 'play' | 'like' | 'back' | 'pause' | 'more' | 'audio' | 'play1' | 'next-batch' | 'audio1' | 'account' | 'volume' | 'prev-song' | 'next-song' | 'fullscreen' | 'volume-off' | 'volume-up' | 'discover' | 'time' | 'listen' | 'icon_play' | 'collection-star' | 'message' | 'collection' | 'home';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'add':
      return <IconAdd key="1" {...rest} />;
    case 'play':
      return <IconPlay key="2" {...rest} />;
    case 'like':
      return <IconLike key="3" {...rest} />;
    case 'back':
      return <IconBack key="4" {...rest} />;
    case 'pause':
      return <IconPause key="5" {...rest} />;
    case 'more':
      return <IconMore key="6" {...rest} />;
    case 'audio':
      return <IconAudio key="7" {...rest} />;
    case 'play1':
      return <IconPlay1 key="8" {...rest} />;
    case 'next-batch':
      return <IconNextBatch key="9" {...rest} />;
    case 'audio1':
      return <IconAudio1 key="10" {...rest} />;
    case 'account':
      return <IconAccount key="11" {...rest} />;
    case 'volume':
      return <IconVolume key="12" {...rest} />;
    case 'prev-song':
      return <IconPrevSong key="13" {...rest} />;
    case 'next-song':
      return <IconNextSong key="14" {...rest} />;
    case 'fullscreen':
      return <IconFullscreen key="15" {...rest} />;
    case 'volume-off':
      return <IconVolumeOff key="16" {...rest} />;
    case 'volume-up':
      return <IconVolumeUp key="17" {...rest} />;
    case 'discover':
      return <IconDiscover key="18" {...rest} />;
    case 'time':
      return <IconTime key="19" {...rest} />;
    case 'listen':
      return <IconListen key="20" {...rest} />;
    case 'icon_play':
      return <IconIconPlay key="21" {...rest} />;
    case 'collection-star':
      return <IconCollectionStar key="22" {...rest} />;
    case 'message':
      return <IconMessage key="23" {...rest} />;
    case 'collection':
      return <IconCollection key="24" {...rest} />;
    case 'home':
      return <IconHome key="25" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;
