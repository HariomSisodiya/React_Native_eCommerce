import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {categoryItemStyleScreen} from './style';
import {fetchCategories} from '../../redux/slice/categorySlice/categorySlice';
import {useDispatch, useSelector} from 'react-redux';

const CategoryScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {categories, loading} = useSelector((state: any) => state.category);
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  const styles = categoryItemStyleScreen();

  // console.log('Category : ', categories);

  useEffect(() => {
    dispatch(fetchCategories());
    startAnimation();
  }, [dispatch]);

  const startAnimation = () => {
    shimmerAnim.setValue(0.1);
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        delay: 100,
      }),
    ).start();
  };

  const renderCategory = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('fetchByCategory', {slug: item.slug})}>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const RenderShimmerCategory = () => {
    const translateX = shimmerAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 900],
    });

    return (
      <View style={styles.categoryItem}>
        <Animated.View
          style={[
            styles.categoryNameShimmer,
            {
              transform: [{translateX}],
              opacity: shimmerAnim,
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
          ]}
        />
      </View>
    );
  };

  // if (loading) {
  //   return (
  //     <View style={styles.loader}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  // const onRefresh = () => {
  //   fetchCategory();
  // };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={categories}
        renderItem={
          loading
            ? () => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <RenderShimmerCategory />
                </View>
              )
            : renderCategory
        }
        keyExtractor={item => item.slug}
        contentContainerStyle={styles.listContainer}
        // refreshControl={
        //   <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        // }
      />
    </View>
  );
};

export default CategoryScreen;
