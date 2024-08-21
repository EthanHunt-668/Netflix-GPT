import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/offcanvas'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './Utils/store'

function App() {

return(<Provider store={appStore}>
  <Header/>
  <Outlet/>
  </Provider>);
}

export default App
