import React from 'react';
import { Repository } from '@/store/ducks/repositories/types';

interface Props {
  repository: Repository; // Alterada a interface para aceitar apenas um repositório
}

const TenisCardd: React.FC<Props> = ({ repository }) => {
  // Ajustada a interface e a prop
  return (
    <div className="cursor-pointer transition-all hover:scale-105">
      <div
        key={repository.id}
        id="cardTenis"
        className="card h-128 min-w-fit max-w-sm bg-base-100 shadow-xl"
      >
        <figure className="w-a98 h-72 bg-white">
          <img src={repository.image} className="object-contain" alt="Shoes" />
        </figure>
        <div className="card-body bg-black rounded-b-2xl">
          <h2 className="card-title text-xs">
            {repository.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>$ {repository.price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{repository.category}</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenisCardd;
