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

const IconBack: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M328.555136 515.587823l364.265028-364.265028c20.07399-20.049007 20.07399-52.553369 0-72.577393-20.024024-20.049007-52.528386-20.049007-72.577393 0L220.992263 477.971128c-20.024024 20.024024-20.024024 52.528386 0 72.577393 1.578929 1.578929 3.383306 2.83188 5.112534 4.160179 0.300796 0.325779 0.526243 0.701724 0.827039 1.027503l389.877663 389.877663c19.57293 19.57293 51.300418 19.57293 70.873148 0s19.57293-51.300418 0-70.873148L328.555136 515.587823z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBack.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconBack) : IconBack;
