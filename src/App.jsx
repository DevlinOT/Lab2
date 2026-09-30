import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  

  return (
    <div>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/header' element={<Header></Header>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
        </Routes>
      {/* <Header></Header>
     <Content></Content>
    <Footer></Footer> */}
    </div>

  )
}

export default App
