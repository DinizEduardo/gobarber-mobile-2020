import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const App = createStackNavigator();

const AuthRoutes: React.FC = () => {
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
      <App.Screen name="SignIn" component={SignIn} />
      <App.Screen name="SignUp" component={SignUp} />
    </App.Navigator>
  );
};

export default AuthRoutes;
