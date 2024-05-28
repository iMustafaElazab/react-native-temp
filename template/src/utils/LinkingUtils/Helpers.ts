import {Linking} from 'react-native';
import {Toast} from 'react-native-toast-notifications';
import {translate} from '@src/core';

const getLogMessage = (message: string) =>
  `## LinkingUtils::Helpers:: ${message}`;

export const appendEmail = (emailLink: string, email?: string) => {
  let appendedLink = `${emailLink}`;

  if (email?.length) {
    appendedLink += email;
  }

  return appendedLink;
};

export const appendEmailSubjectBody = (
  emailLink: string,
  subject?: string,
  body?: string,
) => {
  let appendedLink = `${emailLink}`;

  if (subject?.length || body?.length) {
    appendedLink += '?';

    if (subject?.length) {
      appendedLink += `subject=${subject}`;
    }

    if (body?.length) {
      if (subject?.length) {
        appendedLink += '&';
      }

      appendedLink += `body=${body}`;
    }
  }

  return appendedLink;
};

export const open = async (url: string, errorMessageKey?: string) => {
  console.info(getLogMessage('open'), url);

  try {
    await Linking.openURL(url);
  } catch (error) {
    console.warn(getLogMessage(`Failed to open: ${url}`), error);

    Toast.show(translate(errorMessageKey ?? 'error_processing_request'), {
      type: 'danger',
    });
  }
};
