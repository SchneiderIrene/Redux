import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/WeatherApp/Layout/Layout'
import Home from './pages/WeatherApp/Home/Home'
import Weather from 'pages/WeatherApp/Weather/Weather'



const App = () => {
  return (


  <BrowserRouter>
  <Layout>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/weather' element={<Weather/>}/>
      <Route path='*' element="Page not found"/>
    </Routes>
  </Layout>
  </BrowserRouter>

 )
}

export default App;
