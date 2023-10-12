import type {ToastType} from 'react-native-toast-notifications';

declare global {
  const toast: ToastType | undefined | null;
}

declare var toast: ToastType | undefined | null;
