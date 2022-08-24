import { useSelector } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import styled from './index.module.css'
function Nav() {
    const { leftMoney } = useSelector(state => state.money)
    return (
        <div className={styled.nav}>
            <div className={styled.billMoney}>
                <strong>Spend Bill Gates Money </strong>
                <h2>
                    <Balance balance={leftMoney} />
                </h2>
            </div>
            <div className={styled.brand}>
                <img alt='bill' className={styled.logo} src='/img/bill.png' />
            </div>
        </div>
    )
}
function Balance({ balance }) {
    const props = useSpring({ val: balance, from: { val: 0 } });
    let money = props.val.to((val) => Math.floor(val))
    return (
        <>
            <animated.span>
                {money}
            </animated.span>
        </>

    );
}
export default Nav