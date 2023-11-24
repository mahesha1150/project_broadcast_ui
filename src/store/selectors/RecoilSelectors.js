import { creditCardState1 } from "../atoms/RecoilState";
import { selector } from "recoil";

export const creditCardNumberSelector = selector({
  key: 'creditCardNumberSelector',
  get: ({ get }) => {
      const creditCardState = get(creditCardState1);
      if (creditCardState && creditCardState["creditCardNumber"])
          return creditCardState.creditCardNumber;

      return "XXXX XXXX XXXX XXXX";
  },
});


export const expiryDateSelector = selector({
  key: 'expiryDateSelector',
  get: ({ get }) => {
      const creditCardState = get(creditCardState1);
      if (creditCardState && creditCardState["expiryDate"])
          return creditCardState.expiryDate;

      return "MM/YYYY";
  },
});