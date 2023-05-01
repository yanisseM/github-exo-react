import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Product from './components/Product';
import Footer from './components/Footer';




const App = () => {
      return (
        <div>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Manrope&family=Montserrat&display=swap" rel="stylesheet"></link>

          <div className="content">
            <Header />
            <Sidebar />
           <Product />
            {/* <Footer /> */}
          </div>
        </div>
      );
    }
    
    export default App;
  
