import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';

import Carousel from '../carousel';
import homeScreentheme from './style';
import CardShimmer from '../../components/shimmer/cardShimmer';
import {useProducts} from '../../providers/productContext';

type Product = {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
};

export default function ProductList({navigation}: any) {
  const {products, loading, refresh, onRefresh}: any = useProducts();
  const styles = homeScreentheme();

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
          {item.title.length > 20 ? item.title.slice(0, 16) : item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const cardsLength = [1, 2, 3, 4, 5, 6];

  const renderShimmer = () => (
    <>
      <Carousel />
      <View style={styles.shimmerStyle}>
        {cardsLength.map(item => (
          <CardShimmer key={item} />
        ))}
      </View>
    </>
  );

  const renderContent = () => {
    if (loading) {
      return renderShimmer();
    }

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={renderItems}
        ListEmptyComponent={() => <Text>No products found</Text>}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ListHeaderComponent={
          <View style={{marginBottom: 15, marginTop: 10}}>
            <Carousel />
          </View>
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 15, flex: 1}}>{renderContent()}</View>
    </View>
  );
}
