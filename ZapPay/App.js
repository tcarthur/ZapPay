import React from 'react';
import {StatusBar,} from 'react-native';
import Routes from './src/routes'
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#069D07" />
      <Routes />
    </AuthProvider>
  );
};

export default App;