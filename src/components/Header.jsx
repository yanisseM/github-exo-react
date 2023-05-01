const Navbar = () =>{

    return <header>
        <nav>
            <a href="App.js">
                <img src="https://www.dynamicmarketing.eu/wp-content/uploads/2018/06/ecommerce.logo_.png" alt="Logo e-commerce" className="logo-e-commerce" />
            </a>
                <input type="text" class="searchTerm" placeholder="Recherche..."/>
            <div>
                <a href="">Paramètres</a>
                <a href="">Panier</a>
                <a href="">Compte</a>
            </div>
        </nav>
    </header>;
}

export default Navbar;