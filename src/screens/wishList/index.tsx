import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {wishListStyle} from './style';
import CardShimmer from '../../components/shimmer/cardShimmer';

type Product = {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
};

const WishList = ({navigation}: any) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const styles = wishListStyle();

  const fetchData = async () => {
    setLoading(true);
    try {
      const storedData = await AsyncStorage.getItem('productItem');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
      }
    } catch (error) {
      console.log('Error fetching the wishList data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderItems = ({item}: {item: Product}) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() =>
        navigation.navigate('productDetails', {
          id: item.id,
          slug: item.category,
        })
      }>
      <Image source={{uri: item.thumbnail}} style={styles.image} />
      <View style={styles.productInfo}>
        <Text style={styles.title}>
          {item.title.length > 20 ? item.title.slice(0, 17) : item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <Text>No items in your wish list</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItems}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => (
            <View style={styles.shimmerStyle}>
              {data.map((_, item) => (
                <CardShimmer key={item} />
              ))}
            </View>
          )}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      )}
    </View>
  );
};
export default WishList;
