import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FetchByCategory from '../fetchByCategory';
import {getStorageItem, setStorageItem} from '../../utils/asyncstorage';
import {asyncstorageKey} from '../../utils/constant/asyncstorageKey';
import {ProductDetailsStyle} from './style';
type Product = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: string;
  brand: string;
  discountPercentage: string;
  rating: string;
  stock: number;
  warrantyInformation: string;
  returnPolicy: string;
};

const ProductDetails = ({route, navigation}: any) => {
  const {id, slug} = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [isFavourite, setFavourite] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [wishList, setWishList] = useState([]);

  const styles = ProductDetailsStyle();

  const flatListRef = useRef<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );
        setProduct(response.data);

        // Check if the product is already in the wishlist
        const existingWishList = await getStorageItem(
          asyncstorageKey.productItem,
        );
        const wishL: any[] = existingWishList
          ? JSON.parse(existingWishList)
          : [];
        const itemExists = wishL.some(
          (item: any) => item.id === response.data.id,
        );
        setFavourite(itemExists);
      } catch (error) {
        console.log('Error fetching product data 1');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  const saveWishList = async (data: any) => {
    try {
      const existingWishList = await getStorageItem(
        asyncstorageKey.productItem,
      );
      const wishL: any[] = existingWishList ? JSON.parse(existingWishList) : [];
      const itemExists = wishL.some((item: any) => item.id === data.id);

      if (!itemExists) {
        wishL.push(data);
        await setStorageItem(asyncstorageKey.productItem, wishL);
        setFavourite(true);
        Alert.alert('Success', 'Item successfully added in Wish List');
      } else {
        Alert.alert(
          'Remove Item',
          'Do you want to remove item from Wish List?',
          [
            {
              text: 'Cancel',
            },
            {
              text: 'Ok',
              onPress: async () => {
                const updateWishList = wishL.filter(
                  (item: any) => item.id !== product?.id,
                );
                await setStorageItem(
                  asyncstorageKey.productItem,
                  updateWishList,
                );
                setFavourite(false);
                Alert.alert(
                  'Success',
                  'Item removed successfully from wish list',
                );
              },
            },
          ],
        );
      }
    } catch (error) {
      console.log('Get error in add Items in wish list', error);
    }
  };

  const scrollToTop = () => {
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };
  const imageUrl = product?.thumbnail ? {uri: product.thumbnail} : null;

  const renderProductInfo = ({item}: {item: Product}) => (
    <View style={styles.productInfo}>
      {imageUrl ? (
        <Image source={imageUrl} style={styles.image} />
      ) : (
        <Text>No image available</Text>
      )}
      <View style={styles.heart}>
        <Text style={styles.brand}>{item.brand || 'Brand not available'}</Text>
        <TouchableOpacity onPress={() => saveWishList(item)}>
          <AntDesign
            name={isFavourite ? 'heart' : 'hearto'}
            color={isFavourite ? 'red' : 'gray'}
            size={25}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>
        ${item.price}
        <Text style={styles.discount}> (${item.discountPercentage})</Text>
      </Text>
      <View style={styles.ratingSection}>
        <Text style={styles.rating}>
          <AntDesign name="star" color="#f4c542" size={18} />
          {item.rating} Rating
        </Text>
        <Text style={styles.stock}>
          {item.stock ? (
            'In Stock'
          ) : (
            <Text style={{color: '#f71b1b'}}>Not Available</Text>
          )}
        </Text>
      </View>
      <Text style={styles.heading}>Description</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.description}>
        Warranty: {item.warrantyInformation}
      </Text>
      <Text style={styles.description}>Return Policy: {item.returnPolicy}</Text>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      showsVerticalScrollIndicator={false}
      data={product ? [product] : []}
      keyExtractor={item => item.id.toString()}
      renderItem={renderProductInfo}
      ListFooterComponent={
        <View style={styles.related}>
          <Text style={styles.relatedHeading}>Related Products</Text>
          {slug ? (
            <FetchByCategory
              route={{params: {slug, scrollToTop}}}
              navigation={navigation}
            />
          ) : (
            <Text>No related products available</Text>
          )}
        </View>
      }
      contentContainerStyle={styles.container}
    />
  );
};

export default ProductDetails;