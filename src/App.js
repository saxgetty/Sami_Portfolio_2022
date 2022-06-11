import React from 'react'
import Navbar from './components/Navbar/NavBar'
import Header from './Header'
// import Main from './Main'
// import Footer from './Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/index.css'

function App() {
    return (
        <div className = "App">
            <Header />
            <Navbar />
        </div>
    );
}

export default App;