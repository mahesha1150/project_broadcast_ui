import { Alert } from "@mui/material";
import { useRecoilValue } from 'recoil';
import { creditCardResponseSelector } from "./store/selectors/RecoilSelectors";


const BackEndResponse = () => {
    const creditCardNumberResponse = useRecoilValue(creditCardResponseSelector);

    return (
        <div className="response">
            {creditCardNumberResponse.includes("Valid") && <Alert variant="filled" severity="success">
                {creditCardNumberResponse}
            </Alert>}
            {creditCardNumberResponse.includes("Invalid") && <Alert variant="filled" severity="error">
                {creditCardNumberResponse}
            </Alert>}
        </div>
    )
}

export default BackEndResponse