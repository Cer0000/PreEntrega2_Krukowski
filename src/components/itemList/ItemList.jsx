import Item from "../item/Item"

const ItemList = ({ productos }) => {
    return (
        <div>
            {productos?.map((product) => <Item key={product.id} producto={product} /> )}
        </div>
    )
}

export default ItemList