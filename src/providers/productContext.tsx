import {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';

type Product = {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
};

interface ProductContextType {
  products: Product[];
  loading: boolean;
  refresh: boolean;
  fetchProducts: () => Promise<void>;
  onRefresh: () => void;
}

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({children}: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    } catch (error) {
      console.log('ERROR in Product Context : ', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
      setRefresh(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onRefresh = () => {
    setRefresh(true);
    fetchProducts();
  };

  const contextValue = {
    products,
    loading,
    refresh,
    fetchProducts,
    onRefresh,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
