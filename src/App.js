import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App App-link">
    <Card headTitle="headTitle 1" body="bodyCard_1-bodyCard_1-bodyCard_1-bodyCard_1-bodyCard_1-bodyCard_1-bodyCard_1"/>
    <Card headTitle="headTitle 2" body="bodyCard_2-bodyCard_2-bodyCard_2-bodyCard_2-bodyCard_2-bodyCard_2-bodyCard_2"/>
    <Card footerText="footerText" body="footer-footer-footer-footer-footer-footer-footer"/>

    </div>
  );
}

export default App;
