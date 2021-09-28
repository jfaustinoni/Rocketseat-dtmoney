import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { TransactionsTable } from './components/TransactionsTable';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <Summary />
      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}
