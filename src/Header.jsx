function navbar(){
    return(
        <nav>
                <img src="https://www.dynamicmarketing.eu/wp-content/uploads/2018/06/ecommerce.logo_.png" alt="Logo e-commerce" className="logo-e-commerce" />

                <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
            <div>
                <a href="">Paramètres</a>
                <a href="">Panier</a>
                <a href="">Compte</a>
            </div>
        </nav>
    )
}
export default navbar;