import type {StatusBarProps} from 'react-native-bars';
import type {Edge} from 'react-native-safe-area-context';

export interface Props {
  edges?: Edge[];
  statusBarProps?: StatusBarProps;
  statusBarColor?: string;
}
