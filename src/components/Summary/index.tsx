import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'
import { Container } from "./styles";


export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImage} alt="" />
                </header>
                <strong>RS1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImage} alt="" />
                </header>
                <strong>-RS500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImage} alt="" />
                </header>
                <strong>RS500,00</strong>
            </div>
        </Container>
    );
}