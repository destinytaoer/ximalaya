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

const IconPlay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64zM414.656 726.272 414.656 297.728l311.616 190.464L414.656 726.272z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPlay.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconPlay) : IconPlay;
