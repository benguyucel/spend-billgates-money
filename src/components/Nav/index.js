import React from 'react'
import styled  from './index.module.css'

function Nav() {
    return (
        <div className={styled.nav}>
            <div className={styled.brand}>
                <img className={styled.logo} src='/img/bill.png'/>
            </div>
        </div>
    )
}

export default Nav