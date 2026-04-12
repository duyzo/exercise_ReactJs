import React from 'react'
import counterAtom from '../recoil/CounterAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import themeAtom from '../recoil/ThemeAtom'
import LoginAtom from '../recoil/LoginAtom'
function ComB() {
    const [counter, setCounter] = useRecoilState(counterAtom)
    var username = useRecoilValue(LoginAtom)
    var theme = useRecoilValue(themeAtom)
    function handleUp() {
        setCounter((prev) => prev + 1)
        console.log("Đã tăng counter lên 1");
    } 

    function handleDown() {
        setCounter((prev) => prev - 1)
        console.log("Đã giảm counter xuống 1");
    } 
  return (
    <div style={{backgroundColor:(theme) ? 'white' : 'black'}}>
        {
            (username.loginStatus) ? (
                <h1>{username.username}</h1>
            ) : (
                <h1>Login Page</h1>
            )
        }
        <h1>ComB</h1>
        <div>
            <button onClick={handleUp}>Up</button>
            <button onClick={handleDown}>Down</button>
        </div>
    </div>
  )
}

export default ComB