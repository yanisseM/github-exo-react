import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';




const App = () => {
      return (
        <div>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Manrope&family=Montserrat&display=swap" rel="stylesheet"></link>
          <Sidebar />
          <div className="content">
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      );
    }
    
    export default App;
  
