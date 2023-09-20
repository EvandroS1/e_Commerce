import NavBar from "./components/NavBar";
import { Provider } from 'react-redux';

import TenisCard from "./components/TenisCard"

import RepositoryList from "./components/RepositoryList";
import store from "./store";

const App = () => {

  return (
  <div>
    <NavBar />
    <Provider store={store}>
      <RepositoryList />
    </Provider>;
    <div className="grid place-items-center mt-20 w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <Provider store={store}>
    <TenisCard />
    </Provider>;
    </div>

  </div>
  )
};

export default App;
