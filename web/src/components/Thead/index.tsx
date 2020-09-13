import React from 'react';

interface IThead {
  itens?: string[]
}

const Thead: React.FC<IThead> = ({itens}) => {  
  return (
    <thead>
        <tr>
          {itens?.map((item, index) => <th key={index} scope="col">{item}</th>)}
        </tr>
      </thead>
  );
};

export default Thead;