import React, {useEffect, useState} from 'react';
import Thead from '../../components/Thead'
import Tbody from '../../components/Tbody';

import api from '../../services/api'

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

const List: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setProducts(response.data)
    })
  }, [])
  

  async function handleRemoveProduc(id: number) {
    try {
      const response = await api.delete(`products/${id}`)

      if (response) {
        api.get('products').then(response => {
          setProducts(response.data)
        })
      }
    } catch(err) {
      console.log(`error: ${err}`);
    }
  }

  return (
    <div className="container">
      <table className="table table-striped">
        <Thead itens={['#', 'produto', 'preço', 'ação']} />
        <Tbody products={products} removeProduct={handleRemoveProduc}/>
      </table>
    </div>
  );
};

export default List;