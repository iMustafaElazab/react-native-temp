import * as React from 'react';
import {hide} from 'react-native-bootsplash';

function App(): JSX.Element {
  React.useEffect(() => {
    hide({fade: true});
  }, []);

  return <></>;
}

export default App;
