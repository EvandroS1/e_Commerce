import NavBar from "./components/NavBar";
import { Provider } from 'react-redux';

import TenisCard from "./components/TenisCard"

import RepositoryList from "./components/RepositoryList";
import store from "./store";
// import { load } from "./store/ducks/repositories/saga";


// const products = await load()
const App = () => {

  return (
  <div>
    <NavBar />
    
    <Provider store={store}>
      <RepositoryList />
    </Provider>;

  </div>
  )
};

export default App;
