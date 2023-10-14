import React, {useEffect} from 'react';
import {hide} from 'react-native-bootsplash';

function App(): JSX.Element {
  useEffect(() => {
    hide({fade: true});
  }, []);

  return <></>;
}

export default App;
