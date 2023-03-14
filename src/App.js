import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';



const App = () => {
      return (
        <div>
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
  
