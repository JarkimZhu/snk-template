/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @JarkimZhu
 */
import { AppRegistry } from 'react-native';
import dva from 'dva';
import createLoading from 'dva-loading';
import { createMemoryHistory } from 'dva/router';
// import { persistStore, autoRehydrate } from 'redux-persist';

import registerModels from './src/models/index';

import Router from './src/router';

const app = dva({
  // initialState: {},
  // extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.log('onError', e);
  },
  history: createMemoryHistory('/'),
});

app.use(createLoading());

registerModels(app);
app.router(Router);
const App = app.start();

// eslint-disable-next-line no-underscore-dangle
// persistStore(app._store, { storage: AsyncStorage })

AppRegistry.registerComponent('HelloWorld', () => App);
