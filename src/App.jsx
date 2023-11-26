import CreditCardForm from "./CreditCardForm"
import CreditCardDashboard from "./CreditCardDashboard"
import BackEndResponse from "./BackEndResponse";
import { RecoilRoot } from 'recoil';
import './index.css'

const App = () => {

    
    
    return (
        <>
            <RecoilRoot>
                <div className="root">
                    <CreditCardForm></CreditCardForm>
                    <CreditCardDashboard></CreditCardDashboard>
                </div>
                    <BackEndResponse></BackEndResponse>
            </RecoilRoot>
        </>
    )
}

export default App