import React from 'react'
import LoginAtom from '../recoil/LoginAtom'
import { useRecoilState } from 'recoil'
function Login() {
    const [login, setLogin] = useRecoilState(LoginAtom)
    function handleLogin() {
        var username = document.getElementById("username").value;
        setLogin({
            username,
            loginStatus: true
        })
        console.log("Đã đăng nhập với username ", username);
        
    }
    
  return (
    <div>
        <form>
            <div>
                <label>Username: </label>
                <input type="text" name="" id="username" />
            </div>

            <div>
                <label>Password: </label>
                <input type="password" name="" id="" />
            </div>

            
        </form>
        <div>  
            <button onClick={handleLogin}>Login</button>
        </div>
    </div>
  )
}

export default Login