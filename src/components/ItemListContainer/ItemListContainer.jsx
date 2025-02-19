import { useState, useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setMensaje(greeting);
  }, [greeting]);

  return <div className='itemListContainer'>{mensaje}</div>;
};

export default ItemListContainer;
