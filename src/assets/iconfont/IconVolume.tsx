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

const IconVolume: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M473.088 125.44L256 256H52.224C23.552 256 0 279.552 0 308.224V716.8c0 28.16 23.04 51.2 51.2 51.2h204.8l217.088 130.56c16.896 10.24 38.912-2.048 38.912-22.016V147.456c0-19.968-21.504-32.256-38.912-22.016zM699.904 320.512c-20.992-18.944-53.248-17.408-72.192 3.584-18.944 20.992-17.408 53.248 3.584 72.192 0.512 0.512 58.368 54.784 58.368 121.344 0 37.888-19.456 74.752-58.368 110.08-20.992 18.944-22.528 51.2-3.584 72.192 10.24 11.264 24.064 16.896 37.888 16.896 12.288 0 24.576-4.608 34.304-13.312 61.44-55.296 92.16-117.76 92.16-185.856 0-112.64-88.576-193.536-92.16-197.12z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M853.504 166.4c-20.992-18.944-53.248-16.896-72.192 4.096-18.944 20.992-16.896 53.248 4.096 72.192 1.536 1.024 135.68 122.88 135.68 280.576 0 90.624-45.568 177.152-135.68 257.536-20.992 18.944-23.04 51.2-4.096 72.192 10.24 11.264 24.064 16.896 38.4 16.896 12.288 0 24.576-4.096 34.304-12.8 112.64-100.864 169.984-212.992 169.984-333.824-1.024-202.752-163.84-350.208-170.496-356.864z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconVolume.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconVolume) : IconVolume;
