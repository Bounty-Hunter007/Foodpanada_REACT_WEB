import "./App.css";
import Router from "./config/Router";
import { store } from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Router />
      </header>
    </div>
  </Provider>
  );
}

export default App;
