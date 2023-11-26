import { atom } from 'recoil';

export const creditCardState1 = atom({
    key: 'creditCardState',
    default: {
      creditCardNumber: '',
      expiryDate: '',
      cvv: ''
    }, 
  });


  export const creditCardResponse1 = atom({
    key: 'creditCardResponse',
    default: "", 
  });