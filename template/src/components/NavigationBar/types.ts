import type {NavigationBarProps} from 'react-native-bars';
import type {Edge} from 'react-native-safe-area-context';

export interface Props {
  edges?: Edge[];
  navigationBarProps?: NavigationBarProps;
  navigationBarColor?: string;
}
