import {Provider} from 'react-redux';
import AppNavigation from './src/navigation/appNavigation';
import {ProductProvider} from './src/providers/productContext';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <ProductProvider>
        <AppNavigation />
      </ProductProvider>
    </Provider>
  );
};

export default App;
