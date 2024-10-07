import {View, Image, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {CarouselStyle} from './style';
// import styles from './style';

const screenWidth = 381.4285583496094;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<any>(null);
  const styles = CarouselStyle();

  const data = [
    {
      id: 1,
      image:
        'https://static.vecteezy.com/system/resources/previews/002/156/646/original/big-sale-banner-with-shop-now-button-special-offer-50-percent-off-web-banner-template-design-illustration-free-vector.jpg',
    },
    {
      id: 2,
      image:
        'https://i0.wp.com/english.lematinal.media/wp-content/uploads/2022/09/iPhone-14.jpg?fit=1000%2C604&ssl=1',
    },
    {
      id: 3,
      image:
        'https://st3.depositphotos.com/2648193/17464/i/450/depositphotos_174642242-stock-photo-puma-classic-sneaker.jpg',
    },
    {
      id: 4,
      image:
        'https://images.woodenstreet.de/image/data/Blog%20images/7thapril/2.jpg',
    },
    {
      id: 5,
      image: 'https://static.toiimg.com/photo/76432196.cms',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % data.length; // Loop back to the start
        flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
        return nextIndex;
      });
    }, 3000);

    () => clearInterval(interval);
  }, []);

  const renderItems = ({item}: any) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.image} />
    </View>
  );

  const scrollEvent = (event: any) => {
    const scroll = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scroll / screenWidth);
    setActiveIndex(index);
  };

  const dotManage = () => {
    return data.map((item, index) => (
      <View
        key={item.id}
        style={{
          width: 10,
          height: 10,
          backgroundColor: activeIndex === index ? '#007AFF' : 'grey',
          borderRadius: 50,
          marginHorizontal: 6,
        }}
      />
    ));
  };

  return (
    <View>
      <FlatList
        data={data}
        ref={flatListRef}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItems}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollEvent}
      />
      <View style={styles.dotManage}>{dotManage()}</View>
    </View>
  );
};

export default Carousel;
