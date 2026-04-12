import './App.css'
import './index.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import ComA from './components/ComA'
import ComB from './components/ComB'
import themeAtom from './recoil/ThemeAtom'
import Login from './components/Login'
import LoginAtom from './recoil/LoginAtom'
function App() {
  var [themeValue, setThemeValue] = useRecoilState(themeAtom)
  var loginStatus = useRecoilValue(LoginAtom)
  console.log(loginStatus);
  
  function handleChangeTheme() {
    console.log("Đã change theme");
    setThemeValue(!themeValue);
  }
  return (
    <div style={{height:'100vh', backgroundColor:'white'}}>
      
      
      {(!loginStatus.loginStatus) ? (<Login/>) : (
        <div>
          <button onClick={handleChangeTheme}>Change Theme</button>
          <div style={{width:'100%', display:'flex'}}>
            <div style={{width:'48%', height:'100%',border:'1px solid green'}}>
              <ComA></ComA>                                   
            </div>
            <div style={{width:'48%', border:'1px solid white'}}>
              <ComB ></ComB>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
