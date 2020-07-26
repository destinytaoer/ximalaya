/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconVolumeOff: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M731.428571 201.142857v621.714286q0 14.857143-10.857142 25.714286t-25.714286 10.857142-25.714286-10.857142l-190.285714-190.285715H329.142857q-14.857143 0-25.714286-10.857143t-10.857142-25.714285V402.285714q0-14.857143 10.857142-25.714285t25.714286-10.857143h149.714286l190.285714-190.285715q10.857143-10.857143 25.714286-10.857142t25.714286 10.857142 10.857142 25.714286z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconVolumeOff.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconVolumeOff) : IconVolumeOff;
