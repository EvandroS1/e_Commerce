import NavBar from './components/NavBar';
import { Provider } from 'react-redux';

// import TenisCard from "./components/TenisCard"

import RepositoryList from './components/RepositoryList';
import store from './store';
import Filters from './components/Filters';
// import { load } from "./store/ducks/repositories/saga";

// const products = await load()
const App = () => {
  return (
    <div className="px-32">
      <NavBar />
      <Provider store={store}>
        <Filters />
        <RepositoryList />
      </Provider>
      ;
    </div>
  );
};

export default App;
