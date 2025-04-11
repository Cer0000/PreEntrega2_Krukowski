import { useParams } from "react-router-dom"

const ProductDetail = () => {
  const { productoId } = useParams()
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productoId}`)
        const data = await response.json()
        setProducto(data)
      } catch (error) {
        console.error("Error al obtener el producto:", error)
      } finally {
        setLoading(false)
      }
    };

    fetchProducto()
  }, [productoId])

  if (loading) return <p>Cargando producto...</p>
  if (!producto) return <p>Producto no encontrado</p>

  return (
    <div className="detali-cont">
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} className="img-detail-cont" />
      <p>Precio: ${producto.price}</p>
    </div>
  )
}

export default ProductDetail