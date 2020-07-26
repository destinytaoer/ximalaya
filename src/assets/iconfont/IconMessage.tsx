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

const IconMessage: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c273.5104 0 512 225.792 512 486.4 0 256.2048-233.1136 457.8304-512 457.8304a563.712 563.712 0 0 1-175.616-27.9552c-23.7568 23.04-31.8976 30.8736-82.3296 79.5136-36.352 27.4432-70.5536 36.7616-101.12 19.456-30.8224-17.408-40.0896-51.3024-33.792-95.9488l20.48-118.7328C50.688 716.9024 0 606.3104 0 486.4 0 225.792 238.4384 0 512 0z m0 71.68c-234.8032 0-440.32 194.56-440.32 414.72 0 104.704 46.6944 201.1136 129.024 272.896l1.024 0.8704 15.2064 13.2096-3.4304 19.968-23.552 137.0112c-2.3552 16.384-1.28 22.1184-1.6384 22.528 0.3584-0.512 7.3216-2.7136 19.2512-11.4176l111.104-107.8272 21.1968 7.9872a490.9568 490.9568 0 0 0 172.1344 30.976c241.4592 0 440.32-172.032 440.32-386.2016 0-220.1088-205.5168-414.72-440.32-414.72zM267.6224 400.0256a76.8 76.8 0 1 1 0 153.4976 76.8 76.8 0 0 1 0-153.4976z m255.8976 0a76.8 76.8 0 1 1 0 153.4976 76.8 76.8 0 0 1 0-153.4976z m255.8464 0a76.8 76.8 0 1 1 0 153.4976 76.8 76.8 0 0 1 0-153.4976z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMessage.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconMessage) : IconMessage;
