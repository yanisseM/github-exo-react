// import './src/footer.css';

const footerBar = () =>{
    return <footer>
                <a href="App.js">
                    <img src="https://www.dynamicmarketing.eu/wp-content/uploads/2018/06/ecommerce.logo_.png" alt="Logo e-commerce" className="logo-e-commerce" />
                </a>
                <nav>
                    <ul>
                        <li><a href="">A Propos</a></li>
                        <li><a href="">Policies</a></li> 
                    </ul>
                    <ul>
                        <li><a href="">Chartes de confidentialités</a></li>
                        <li><a href="">Nous Contacter</a></li>
                    </ul>
                </nav>
                
                <div>
                <a target="_blank" href="https://twitter.com/">
                        <img src="https://cdn.icon-icons.com/icons2/1143/PNG/512/twitterlogooutline_80724.png" alt="Logo Twitter" className="logo-reseaux" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/">
                        <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="logo d'Instagram" className="logo-reseaux" />
                    </a> 
                </div>
    </footer>;
}

export default footerBar;