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

const IconCollection: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 384c0-256 320-256 384-64 64-192 384-192 384 64 0 192-128 320-384 448-256-128-384-256-384-448z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCollection.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconCollection) : IconCollection;
