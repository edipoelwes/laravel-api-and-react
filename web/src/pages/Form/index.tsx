import React, { FormEvent, useState } from 'react';

import {sweetAlert} from '../../utils/sweetAlert'

import {useHistory} from 'react-router-dom'
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';

// import {stringToFloat} from '../../utils/utils'

const Form = () => {

  const history = useHistory();

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const createProduct = async (event: FormEvent) => {
    event.preventDefault()
  
    try{
      await api.post('/products', {
        name,
        price: Number(price)
      }).then(() => {
        history.push('/')

        sweetAlert('Cadastrado com sucesso.', 'success')
        
      })
    } catch(err) {
      sweetAlert('Não foi possivel cadastrar.', 'error')
    }
  }

  return (
    <div className="container">  
      <h2 className="mb-3">Formulário de dados</h2>
      <form onSubmit={createProduct}>
        <Input 
          type="text" 
          name="product" 
          placeholder="Nome do produto" 
          label="Produto:"
          onChange={e => {
            setName(e.target.value)
          }}
        />
        
        <Input 
          type="text" 
          name="price" 
          placeholder="Valor do produto" 
          label="Preço:"
          onChange={e => {
            setPrice(e.target.value.replace(',', '.'))
          }}
        />

        <div className="mt-3">
          <Button type="submit" className="btn btn-primary" value="Enviar"/>
        </div>
        
      </form>
    </div>
    
  );
};

export default Form;