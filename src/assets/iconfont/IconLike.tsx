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

const IconLike: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.003708 511.996332"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512.018459 0C229.227429 0 0 229.234805 0 512.011084c0 282.754151 229.227429 511.988956 512.018459 511.988956 282.768903 0 511.996332-229.227429 511.996332-511.988956C1024.014791 229.234805 794.787362 0 512.018459 0zM512.018459 999.025328c-268.990769 0-487.036372-218.052979-487.036372-487.021621s218.052979-487.028996 487.036372-487.028996c268.983393 0 487.028996 218.052979 487.028996 487.028996S781.001853 999.025328 512.018459 999.025328z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M751.645872 315.628424c-29.842788-29.547753-69.628256-44.439644-109.244078-44.439644-37.292422 0-74.385695 13.217567-102.782812 39.881354-11.941541 10.24509-20.600818 18.225786-27.652154 18.225786-7.523392 0-14.154303-7.50864-27.578395-18.225786-30.373851-26.811304-67.452373-40.036247-104.19898-40.036247-39.165894 0-77.93349 15.009905-107.805782 44.587162-60.076498 59.456925-60.076498 161.118604 0 220.575528l216.754825 209.519092c4.322262 4.322262 14.110048 7.235733 23.956841 7.235733 8.312611 0 16.654725-2.087372 21.773582-7.213605l216.776953-209.548596C811.685491 476.739651 811.685491 375.070597 751.645872 315.628424L751.645872 315.628424zM734.430581 518.413343 518.059301 727.563641c-0.730212 0.258156-2.397159 0.641701-4.993467 0.641701-3.496165 0-6.387507-0.730212-7.729917-1.224395l-215.559934-208.368456c-23.971592-23.720813-37.720222-57.502318-37.720222-92.699991 0-35.205049 13.74863-68.993931 37.734974-92.714743 24.362514-24.133862 56.454944-37.425187 90.376591-37.425187 31.915409 0 63.115359 12.0153 87.831914 33.833137l0.46468 0.420425 0.486808 0.390921c2.965102 2.36028 5.576161 4.573042 7.943817 6.549777 10.429487 8.769915 20.283655 17.060398 35.064908 17.060398 15.695861 0 27.475133-10.141828 41.105749-21.898972l2.655315-2.301273 0.420425-0.354042 0.413049-0.383545c22.776701-21.390036 53.275942-33.18406 85.847804-33.18406 34.423207 0 67.887549 13.586361 91.814886 37.285046 23.964216 23.713437 37.698095 57.502318 37.698095 92.699991S758.188273 494.891679 734.430581 518.413343L734.430581 518.413343zM382.453847 330.859605c-14.655863-1.681699-44.498651 3.739568-66.486133 25.734426-17.761106 17.702099-28.581514 43.377518-28.972435 68.69152-0.095886 6.83006 5.362261 12.457852 12.192321 12.553738l0.191773 0c6.741549 0 12.266079-5.421268 12.376717-12.184945 0.280283-19.015005 8.401121-38.288165 21.692447-51.564739 16.10891-16.116286 38.435682-19.538692 46.121344-18.653587 6.741549 0.833474 12.937284-4.071483 13.726503-10.857287C394.092977 337.807678 389.232276 331.656199 382.453847 330.859605L382.453847 330.859605zM382.453847 330.859605"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconLike.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconLike) : IconLike;
