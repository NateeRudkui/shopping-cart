import plus from "../plus.svg";
import minuus from "../minus.svg";
import deleteicon from "../delete-icn.svg"
import { MyCartContext } from "../management/context";

const CartItem = ({ id, name, image_url, price, quantity }) => {
    const {removeItem,toggleQuantity,formatNumber} = MyCartContext()
  return (
    <div className="item">
      <div className="product-image">
        <img src={image_url} />
      </div>
      <div className="description">
        <span>{name}</span>
        <span>ราคา {formatNumber(price)}</span>
      </div>
      <div className="quantity">
        <button className="plus-btn" onClick={()=>toggleQuantity(id,"increment")}>
          <img src={plus} />
        </button>
        <input type="text" value={quantity} disabled></input>
        <button className="minus-btn"  onClick={()=>toggleQuantity(id,"decrement")}>
          <img src={minuus} />
        </button>
      </div>
      <div className="total-price">{formatNumber(price * quantity)}</div>
      <div className="remove" onClick={()=>removeItem(id)}>
        <img src={deleteicon} ></img>
      </div>
    </div>
  );
};

export default CartItem;
