import { useDispatch } from 'react-redux';

import { loadRequest } from '../store/ducks/repositories/actions'; // Importe as ações correspondentes
import { useEffect, useState } from 'react';

const Filters = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState('');

  useEffect(() => {
    console.log('log', category);
    setCategory
    dispatch(loadRequest(category));
    
    
  }, [category])
  return (
    <ul className=" menu rounded-box relative z-10 bg-base-200 lg:menu-horizontal">
      <li>
        <details>
          <summary>Categorias</summary>
          <ul>
            <li>
              <a onClick={() => setCategory('')}>All</a>
            </li>
            <li>
              <a onClick={() => setCategory('/category/men%27s%20clothing')}>Men's Clothing</a>
            </li>
            <li>
              <a onClick={() => setCategory('/category/women%27s%20clothing')}>Women's Clothing</a>
            </li>
            <li>
              <a onClick={() => setCategory('/category/jewelery')}>Jewelery</a>
            </li>
            <li>
              <a onClick={() => setCategory('/category/electronics')}>Electronics</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  )
}

export default Filters;
