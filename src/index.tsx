import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './navigations';
import {ThemeProvider} from 'styled-components';

const theme = {
  colors: {
    bgColor: '#121212',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
