import { creditCardState1, creditCardResponse1 } from "../atoms/RecoilState";
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

export const creditCardResponseSelector = selector({
  key: 'creditCardResponseSelector',
  get: ({ get }) => {
      const creditCardResponse = get(creditCardResponse1);
      if (creditCardResponse)
          return creditCardResponse;

      return "";
  },
});