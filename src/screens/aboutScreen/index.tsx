import React, {useState, useRef, useEffect} from 'react';
import {Text, ScrollView, TouchableOpacity, Animated} from 'react-native';
import {AboutScreenStyle} from './style';

const AboutScreen = () => {
  const [expanded, setExpanded] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  const styles = AboutScreenStyle();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Animated.View
        style={[
          styles.container,
          {opacity: fadeAnim, transform: [{scale: scaleAnim}]},
        ]}>
        <Text style={styles.about}>About Us</Text>
        <Animated.Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww',
          }}
          style={[styles.image, {transform: [{scale: scaleAnim}]}]}
        />
        <TouchableOpacity onPress={toggleExpand}>
          <Text
            style={[
              styles.description,
              expanded && styles.expandedDescription,
            ]}>
            "At Our E-Commerce, we bring you a curated selection of the best
            products to enhance your shopping experience. Our goal is to provide
            top-quality items, unbeatable prices, and exceptional service to
            make your online shopping seamless and enjoyable."
            {expanded &&
              "\n\nFounded in 2023, we've quickly grown to become a leader in the e-commerce space. Our commitment to innovation and customer satisfaction sets us apart from the competition. We're constantly exploring new ways to improve your shopping experience and bring you the latest trends in the market."}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleExpand}>
          <Text style={styles.buttonText}>
            {expanded ? 'Read Less' : 'Read More'}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

export default AboutScreen;
