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

const IconTime: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C265 64 64 265 64 512s201 448 448 448 448-201 448-448S759 64 512 64z m185.8 612.9c-6.5 12-16.5 20.4-28.1 23.5-3.3 0.9-6.7 1.3-10.1 1.3-7.8 0-15.6-2.3-22.9-6.7l-149.4-96.1c-5.2-3.1-11.4-6.8-15.6-11.8-20.6-13-30.6-26.3-30.6-40.7V281.1c0-27.1 21-49.1 46.9-49.1 25.8 0 46.9 22 46.9 49.1v241.6l142.6 87.6c23.3 14.3 32.4 44.2 20.3 66.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTime.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconTime) : IconTime;
