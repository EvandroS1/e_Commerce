import { useDispatch } from 'react-redux';

import {
  loadRequestMensClothing,
  loadRequestWomensClothing,
  loadRequestJewelery,
  loadRequestElectronics,
  loadRequest,
} from '../store/ducks/repositories/actions'; // Importe as ações correspondentes

const Filters = () => {
  const dispatch = useDispatch();

  const handleButtonClickAll = () => {
    dispatch(loadRequest());
  };
  const handleButtonClickMensClothing = () => {
    dispatch(loadRequestMensClothing());
  };

  const handleButtonClickWomensClothing = () => {
    dispatch(loadRequestWomensClothing());
  };

  const handleButtonClickJewelery = () => {
    dispatch(loadRequestJewelery());
    console.log('foi');
  };

  const handleButtonClickElectronics = () => {
    dispatch(loadRequestElectronics());
  };
  return (
    <ul className=" menu rounded-box relative z-10 bg-base-200 lg:menu-horizontal">
      <li>
        <details>
          <summary>Categorias</summary>
          <ul>
            <li>
              <a onClick={handleButtonClickAll}>All</a>
            </li>
            <li>
              <a onClick={handleButtonClickMensClothing}>Men's Clothing</a>
            </li>
            <li>
              <a onClick={handleButtonClickWomensClothing}>Women's Clothing</a>
            </li>
            <li>
              <a onClick={handleButtonClickJewelery}>Jewelery</a>
            </li>
            <li>
              <a onClick={handleButtonClickElectronics}>Electronics</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default Filters;
