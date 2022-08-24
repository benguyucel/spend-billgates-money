import { nanoid } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTotal, selectCart } from "../../redux/slice/cartSlice"
import { calcTotal } from "../../redux/slice/moneySlice"
import convertToInternationalCurrencySystem from "../../utils/convertMoney"
import './index.css'
function Footer() {
    const items = useSelector(selectCart)
    const total = useSelector(getTotal) || 0
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calcTotal(total))
    }, [total])
    return (
        <div className="cart" style={{ display: 'flex', justifyContent: 'center' }}>
            <ul>
                {items.map(item => (
                    <li key={nanoid()}>
                        <span>{item.productName}</span>
                        <span>X  {item.count}</span>
                        <span>{convertToInternationalCurrencySystem(item.count * item.productPrice)}</span>
                    </li>
                ))}
                <hr />
                <li><span>TOTAL</span><span>{convertToInternationalCurrencySystem(total)}</span> </li>
            </ul>
        </div>
    )
}

export default Footer
