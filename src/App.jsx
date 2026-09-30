// Import Routes and Route from React Router
// These are used to control which component appears for each URL
import { Routes, Route } from 'react-router-dom'

// Import the NavigationBar component
import NavigationBar from './components/NavigationBar.jsx'

// Import the main Content component
import Content from './components/Content';

// Import the Header component
import Header from './components/Header';

// Import the Footer component
import Footer from './components/Footer';


// Main App component
function App() {
  

  // Return the components that will be displayed on the page
  return (
    <div>

      {/* Display the navigation bar on every page */}
      <NavigationBar></NavigationBar>

      {/* Routes decides which component to display based on the URL */}
      <Routes>

        {/* Display the Content component on the home page */}
        <Route path='/' element={<Content></Content>}></Route>

        {/* Display the Header component when the URL is /header */}
        <Route path='/header' element={<Header></Header>}></Route>

        {/* Display the Footer component when the URL is /footer */}
        <Route path='/footer' element={<Footer></Footer>}></Route>
        
        </Routes>
      
     {/*
        These components were previously displayed directly.
        They are commented out because they are now displayed using routes.

        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      */}}
    </div>

  )
}
// Export App so it can be imported and used in main.jsx
export default App
