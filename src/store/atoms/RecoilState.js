import { atom } from 'recoil';

export const creditCardState1 = atom({
    key: 'creditCardState', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });