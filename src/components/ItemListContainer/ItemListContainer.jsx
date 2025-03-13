import { useEffect, useState } from "react";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="products-list-cont">
      <h1>Lista de Productos</h1>
      <div className="product-cont">
        {productos.map((producto) => (
          <div key={producto.id} className="product">
            <img src={producto.image} alt={producto.title} className="product-img" />
            <h3 className="product-title">{producto.title}</h3>
            <p className="product-price">Precio: ${producto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
