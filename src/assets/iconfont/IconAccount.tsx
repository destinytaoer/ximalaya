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

const IconAccount: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M535.6 511.8c95.1-10.5 172.1-87.5 182.6-182.6C732 204 634.4 98.2 512 98.2c-114.6 0-207.5 92.8-207.5 207.4v0.1c0 122.4 105.9 219.9 231.1 206.1zM512 572.4c-138.5 0-415 79.4-415 237.1v88.9c0 16.4 13.3 29.6 29.6 29.6h770.7c16.4 0 29.6-13.3 29.6-29.6v-88.9C927 651.9 650.5 572.4 512 572.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconAccount.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconAccount) : IconAccount;
