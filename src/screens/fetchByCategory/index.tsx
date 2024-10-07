import {FlatList, Image, View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {FetchByCategoryStyle} from './style';
import CardShimmer from '../../components/shimmer/cardShimmer';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategoryData} from '../../redux/slice/fetchCategorySlice/fetchCategorySlice';

const FetchByCategory = ({route, navigation}: any) => {
  const {slug, scrollToTop} = route.params;
  const styles = FetchByCategoryStyle();
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state: any) => state.fetchCategory);
  // console.log('Existing Id : ', existingId);
  // console.log('Data : ', data);

  useEffect(() => {
    dispatch(fetchCategoryData(slug));
  }, [dispatch, slug]);

  const handleClick = (productId: string) => {
    navigation.navigate('productDetails', {id: productId, slug});
    if (scrollToTop) {
      scrollToTop();
    }
  };
  // if (loading) {
  //   return (
  //     <View style={styles.loader}>
  //       <ActivityIndicator size="large" color="#007AFF" />
  //     </View>
  //   );
  // }

  const renderItems = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => handleClick(item.id)}>
      <Image source={{uri: item.thumbnail}} style={styles.image} />
      <View style={styles.productInfo}>
        <Text style={styles.title}>
          {item.title.length > 20 ? item.title.slice(0, 16) : item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const cardLength = [1, 2, 3, 4, 5, 6];

  const renderShimmer = () => (
    <View style={styles.shimmerStyle}>
      {cardLength.map(item1 => (
        <CardShimmer key={item1} />
      ))}
    </View>
  );

  const renderContent = () => {
    if (loading) {
      return renderShimmer();
    }

    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItems}
          ListEmptyComponent={() => <Text>No products found</Text>}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 15, flex: 1, marginTop: 20}}>
        {renderContent()}
      </View>
    </View>
  );
};

export default FetchByCategory;
