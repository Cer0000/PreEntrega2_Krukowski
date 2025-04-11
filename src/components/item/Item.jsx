import { useNavigate } from "react-router-dom";

const Item = ({product}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/item/${product.id}`)
    }

    return (
        <div onClick={handleClick} >
            <img src={product.image} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </div>
    )
}

export default Item