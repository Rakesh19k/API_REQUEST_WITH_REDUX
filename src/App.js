import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store"
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
