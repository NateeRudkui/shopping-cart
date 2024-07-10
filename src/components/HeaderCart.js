import { MyCartContext } from "../management/context"

const HeaderCart = () =>{
    const {amount} = MyCartContext()
    return (<button className="button">
        <span>ตะกล้าสินค้า</span>
       <span className="badge"> {amount}</span>
    </button>)
}

export default HeaderCart