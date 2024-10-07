import {View, Text, Animated, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {shimmerScreenStyle} from './style';

const CardShimmer = () => {
  const shimmerAnimation = useRef(new Animated.Value(0)).current;
  const styles = shimmerScreenStyle();

  const startAnimation = () => {
    shimmerAnimation.setValue(0);
    Animated.loop(
      Animated.timing(shimmerAnimation, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        delay: 500,
      }),
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 200],
  });

  return (
    <View style={styles.Item}>
      <View style={styles.imageSkeleton}>
        <Animated.View
          style={[
            styles.imageSkeleton,
            {
              transform: [{translateX}],
              opacity: shimmerAnimation,
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
          ]}
        />
      </View>
      <View style={styles.productInfo}>
        <Animated.View
          style={[
            styles.titleSkeleton,
            {
              transform: [{translateX}],
              opacity: shimmerAnimation,
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
          ]}
        />
      </View>
    </View>
  );
};

export default CardShimmer;
