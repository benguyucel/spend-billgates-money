import React from 'react'
import { useSelector } from 'react-redux'
import { formatMoney } from '../../utils/moneyFormat'
import styled from './index.module.css'
function Nav() {
    const { leftMoney } = useSelector(state => state.money)

    return (
        <div className={styled.nav}>
            <div className={styled.billMoney}>
                <strong>Spend Bill Gates Money </strong>
                <h2>{formatMoney(leftMoney)}</h2>
            </div>
            <div className={styled.brand}>
                <img alt='bill' className={styled.logo} src='/img/bill.png' />
            </div>
        </div>
    )
}

export default Nav