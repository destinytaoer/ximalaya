import React, {FC, useState} from 'react';
import SnapCarousel, {
  AdditionalParallaxProps,
  ParallaxImage,
  Pagination,
} from 'react-native-snap-carousel';
import {StyleSheet, View} from 'react-native';
import {viewportWidth, wp, hp} from '@utils/index';
import {ICarousel} from '@models/home';

const sliderWidth = viewportWidth;
const imgWidth = wp(90);
const imgHeight = hp(26);
const itemWidth = imgWidth + wp(2) * 2;

interface IProps {
  data: ICarousel[];
}

const Carousel: FC<IProps> = (props) => {
  const {data} = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const renderItem = (
    {item}: {item: ICarousel; index: number},
    parallaxProps?: AdditionalParallaxProps,
  ) => (
    <ParallaxImage
      source={{uri: item.image}}
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
          dotsLength={data.length}
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
        data={data}
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
