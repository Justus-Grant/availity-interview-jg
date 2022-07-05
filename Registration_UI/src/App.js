import './App.css';
import Header from './header/Header'
import DisplayFormDataInTable from './display/DisplayFormDataInTable';

function App() {

  return (
    <div className="App">
      <Header />
      <h1>
        Patient Registration Form
      </h1>
      <DisplayFormDataInTable />
    </div>
  );
}

export default App;
