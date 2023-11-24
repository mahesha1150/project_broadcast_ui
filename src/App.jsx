import CreditCardForm from "./CreditCardForm"
import CreditCardDashboard from "./CreditCardDashboard"
import { RecoilRoot } from 'recoil';

const App = () => {
    return (
        <>
            <RecoilRoot>
            <div style={{ display: "grid", gridTemplateColumns: "20% 30% 30% 20%", marginTop: 160 /*, gap: "4%" */ }}>
                <div></div>
                <CreditCardForm></CreditCardForm>
                <CreditCardDashboard></CreditCardDashboard>
                <div></div>
            </div>
            </RecoilRoot>
        </>
    )
}

export default App