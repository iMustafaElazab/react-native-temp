import * as React from 'react';
import {useGetNotificationsApi} from '@src/core';
import {useFocusNotifyOnChangeProps} from '@src/utils';

export default React.memo(() => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const {} = useGetNotificationsApi({
    notifyOnChangeProps: notifyOnChangeProps?.(),
  });

  return <></>;
});
