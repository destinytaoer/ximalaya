import React, {FC, useState} from 'react';
import SnapCarousel, {
  AdditionalParallaxProps,
  ParallaxImage,
  Pagination,
} from 'react-native-snap-carousel';
import {StyleSheet, View} from 'react-native';
import {viewportWidth, wp, hp} from '@utils/index';

const sliderWidth = viewportWidth;
const imgWidth = wp(90);
const imgHeight = hp(26);
const itemWidth = imgWidth + wp(2) * 2;
console.log(imgWidth, imgHeight);

const imgs: Array<string> = [
  'https://www.soohub.com/get_image/800-9f2c80969dd0bbe20a30859ddeda3286',
  'https://www.soohub.com/get_image/800-d8990f780ca3881dcc65da7d5bc1e490',
  'https://www.soohub.com/get_image/800-b148ee282753cde435b34ef6af68e84a',
  'https://www.soohub.com/get_image/800-27d4072b62e85129b348b36baecc5633',
  'https://www.soohub.com/get_image/800-4d9a1ca6184d70f8d941bed2394d6ccd',
  'https://www.soohub.com/get_image/800-49a243d3234394931e08b8523dbea68d',
  'https://www.soohub.com/get_image/800-b27da61cdf494d5180e9ef1e99c6982c',
];

const Carousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const renderItem = (
    {item}: {item: string; index: number},
    parallaxProps?: AdditionalParallaxProps,
  ) => (
    <ParallaxImage
      source={{uri: item}}
      style={styles.image}
      containerStyle={styles.imageContainer}
      parallaxFactor={0.8}
      showSpinner
      spinnerColor="rgba(0, 0, 0, 0.25)"
      {...parallaxProps}
    />
  );

  const onSnapToItem = (index: number) => {
    setActiveIndex(index);
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          dotsLength={imgs.length}
          activeDotIndex={activeIndex}
          containerStyle={styles.paginationContainer}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
          inactiveDotScale={0.8}
          inactiveDotOpacity={0.4}
        />
      </View>
    );
  };

  return (
    <View>
      <SnapCarousel
        data={imgs}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages
        loop
        autoplay
        onSnapToItem={onSnapToItem}
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: imgHeight,
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});

export default Carousel;
