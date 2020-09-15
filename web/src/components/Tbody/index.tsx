import React from 'react';
import {money_br} from '../../utils/utils'

import {IProduct} from '../../pages/List'

interface DataProps {
  products: IProduct[];
  removeProduct(id: number): void
}

const Tbody: React.FC<DataProps> = ({products, removeProduct}) => {
  return (
    <tbody>
      {products.map(product => (
        <tr key={product.id}>
          <th scope="row">{product.id}</th>
          <td>{product.name}</td>
          <td>R$ {money_br(product.price.toString())}</td>
          <td>
            <button type="button" className="btn btn-danger" onClick={() => removeProduct(product.id)}>
              remover
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;