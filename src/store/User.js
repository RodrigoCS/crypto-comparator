import { atom, selector } from 'recoil';

export const firstNameState = atom({
  key: 'firstNameState',
  default: '',
});

export const lastNameState = atom({
  key: 'lastNameState',
  default: '',
});

export const emailState = atom({
  key: 'emailState',
  default: '',
});

export const phoneNumberState = atom({
  key: 'phoneNumberState',
  default: '',
});

export const profileCompletionState = selector({
  key: 'profileCompletionState',
  get: ({ get }) => {
    const firstName = get(firstNameState);
    const lastName = get(lastNameState);
    const email = get(emailState);
    const phoneNumber = get(phoneNumberState);

    return !!(firstName && lastName && email && phoneNumber);
  },
});
