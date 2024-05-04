import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import type {RootStackParamList} from '@src/navigation';
import {Splash, Login, Home, Notifications} from '@src/screens';
import {useAppSelector} from '@src/store';

const stack = createNativeStackNavigator<RootStackParamList>();

export default React.memo(() => {
  // #region Redux
  const {user} = useAppSelector(state => state.user);
  // #endregion

  return (
    <stack.Navigator
      id="RootStack"
      initialRouteName="splash"
      screenOptions={{headerShown: false}}>
      {/* Screens */}
      <stack.Screen name="splash" component={Splash} />
      {!user && (
        <stack.Group>
          <stack.Screen name="login" component={Login} />
        </stack.Group>
      )}
      {user && (
        <stack.Group>
          <stack.Screen name="home" component={Home} />
          <stack.Screen name="notifications" component={Notifications} />
        </stack.Group>
      )}

      {/* Navigators */}
      {/* TODO: Add nested navigators here. */}

      {/* Modals */}
      <stack.Group
        screenOptions={{
          presentation: 'transparentModal',
        }}>
        <>{/* TODO: Add modals screens here. */}</>
      </stack.Group>
    </stack.Navigator>
  );
});
