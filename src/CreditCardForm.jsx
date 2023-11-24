import { Typography, TextField, Card, Button } from "@mui/material";
import { creditCardState1 } from "./store/atoms/RecoilState";
import { useRecoilState } from 'recoil';

const CreditCardForm = () => {
  const [creditCard, setCreditCard] = useRecoilState(creditCardState1);

  /* const handleExpiryDateChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Allow only numeric characters

    // Format the input as "mm/yyyy"
    if (input.length <= 2) {
      setCreditCard((creditCard) => ({ ...creditCard, expiryDate: input }));
    } else {
      setCreditCard((creditCard) => ({
        ...creditCard,
        expiryDate: `${input.slice(0, 2)}/${input.slice(2, 6)}`,
      }));
    }
  }; */

  const handleCreditCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    let formattedInput = '';

    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedInput += ' '; // Add space every 4 characters
      }
      formattedInput += input[i];
    }

    setCreditCard((creditCard) => ({ ...creditCard, creditCardNumber: formattedInput }));
  };

  return (
    <>
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" style={{ color: "#22168d", fontWeight: 'bold', marginBottom: 10 }}>Credit Card Details</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 450, padding: 20, border: "2px solid rgb(34, 22, 141)" }}>
          <TextField fullWidth label="Card Number" type="number" variant="outlined" onChange={(e) => setCreditCard((creditCard) => ({ ...creditCard, creditCardNumber: e.target.value }))} style={{ marginBottom: 10 }} autoComplete="off" />
          <div style={{ display: "grid", gridTemplateColumns: "48% 48%", gap: "4%" }}>
            <TextField fullWidth label="Expiry Date" variant="outlined" /* value={creditCard.expiryDate} */ onChange={(e) => setCreditCard((creditCard) => ({ ...creditCard, expiryDate: e.target.value }))} placeholder="mm/yyyy" style={{ marginBottom: 10 }} autoComplete="off" />
            <TextField fullWidth label="CVV" type="number" variant="outlined" onChange={(e) => setCreditCard((creditCard) => ({ ...creditCard, cvv: e.target.value }))} style={{ marginBottom: 10 }} autoComplete="off" />
          </div>
          <Button size='large' variant="contained" style={{ backgroundColor: "#22168d", width: 400 }} onClick={() => checkCreditCard(creditCard)}>Validate Credit Card Details</Button>
        </Card>
      </div>
      </div>
    </>
  )

  function checkCreditCard(creditCard) {
    alert(creditCard.creditCardNumber);

    fetch(`http://localhost:5000/validateCreditCard`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        creditCardNumber: creditCard.creditCardNumber/* ,
        expiryDate: creditCard.expiryDate,
        cvv: creditCard.cvv */
      })
    }).then(response => {
      if (response.status !== 401 && response.status !== 403) {
        return response.json();
      } else {
        window.location = "/signin";
      }
    }).then((response) => {
      alert(response.message);
      /* navigate("/courses"); */
    });
  }
}

export default CreditCardForm