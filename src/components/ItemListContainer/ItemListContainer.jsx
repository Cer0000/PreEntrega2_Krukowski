import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where, limit, getDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/client"
import ItemList from "../itemList/ItemList"
import { Category } from "@mui/icons-material"

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    let productsRef = collection(db, 'products')

    if (categoryId) {
      productsRef = query(
        collection(db, "products"),
        where("categoryId", "==", categoryId)
      )
    }

    const data = await getDocs(productsRef)
    const dataFiltrada = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
    console.log(dataFiltrada)
    setProducts(dataFiltrada)
    setLoading(false)
  }


  useEffect(() => {
    getProducts()
  }, [categoryId])


  if (loading) return <p>Cargando...</p>

  return (
    <>
      {products.length > 0 ? <ItemList productos={products}/> : <div>No hay productos</div>}
    </>
    // <div className="products-list-cont">
    //   <h1>{categoriaID ? `${categoriaID}` : "Todos los Productos"}</h1>
    //   <div className="product-cont">
    //     {productos.map((producto) => (
    //       <div key={producto.id} className="product">
    //         <img src={producto.image} alt={producto.title} className="product-img" />
    //         <h3 className="product-title">{producto.title}</h3>
    //         <p className="product-price">Precio: ${producto.price}</p>
    //         <button className="add-to-cart">Agregar al carrito</button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}

export default ItemListContainer
