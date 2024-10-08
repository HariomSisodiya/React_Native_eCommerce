import {Provider} from 'react-redux';
import AppNavigation from './src/navigation/appNavigation';
import {ProductProvider} from './src/providers/productContext';
import {persistor, store} from './src/redux/store/store';
import {PersistGate} from 'reduxjs-toolkit-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <ProductProvider>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </ProductProvider>
    </Provider>
  );
};

export default App;
