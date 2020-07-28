import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../Pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        // headerStyle: {
        //   backgroundColor: '#7159c1',
        // },
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  );
};

export default AppRoutes;
