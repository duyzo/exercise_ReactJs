import counterAtom from '../recoil/CounterAtom'
import { useRecoilValue } from 'recoil'
import themeAtom from '../recoil/ThemeAtom';
import LoginAtom from '../recoil/LoginAtom';
function ComA() {
var value = useRecoilValue(counterAtom)
var theme = useRecoilValue(themeAtom)
var username = useRecoilValue(LoginAtom)
  return (
    <div style={{height: '100%', backgroundColor: (theme) ? 'white' : 'black'}}>
        {
            (username.loginStatus) ? (
                <h1>{username.username}</h1>
            ) : (
                <h1>Login Page</h1>
            )
        }
        <h1>ComA</h1>
        <h3>{value}</h3>
    </div>
  )
}

export default ComA