import React, {useEffect, useState} from 'react';

import Swal from 'sweetalert2'

import {sweetAlert} from '../../utils/sweetAlert'
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
      await Swal.fire({
        title: 'Tem certeza que quer Deletar esse registro?',
        text: "Você não poderá reverter essa ação!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm!'
      }).then((result) => {
        if (result.isConfirmed) {
          api.delete(`products/${id}`).then(() => {
            api.get('products').then(response => {
              setProducts(response.data)
            })
            sweetAlert('Removido com sucesso.')
          })  
        }
      })
    } catch(err) {
      sweetAlert('Não foi possivel remover.', 'warning')
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