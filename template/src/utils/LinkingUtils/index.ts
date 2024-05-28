import {open, appendEmail, appendEmailSubjectBody} from './Helpers';

const getLogMessage = (message: string) => `## LinkingUtils:: ${message}`;

export const openUrl = (url?: string, errorMessageKey?: string) => {
  console.info(getLogMessage('openUrl'), url);

  if (url?.length) {
    open(url, errorMessageKey ?? 'error_open_url');
  }
};

export const openEmail = (
  email?: string,
  subject?: string,
  body?: string,
  errorMessageKey?: string,
) => {
  console.info(getLogMessage('openEmail'), email, subject, body);

  if (email?.length || subject?.length || body?.length) {
    let emailLink = 'mailto:';
    emailLink = appendEmail(emailLink, email);
    emailLink = appendEmailSubjectBody(emailLink, subject, body);
    console.info(getLogMessage('emailLink'), emailLink);
    open(emailLink, errorMessageKey ?? 'error_open_mail');
  }
};

export const openPhone = (phone?: string, errorMessageKey?: string) => {
  console.info(getLogMessage('openPhone'), phone);

  if (phone?.length) {
    open(`tel:${phone}`, errorMessageKey ?? 'error_open_phone');
  }
};

export const openWhatsApp = (number?: string, errorMessageKey?: string) => {
  console.info(getLogMessage('openWhatsApp'), number);

  if (number?.length) {
    open(
      `whatsapp://send?phone=${number}`,
      errorMessageKey ?? 'error_open_whats_app',
    );
  }
};
