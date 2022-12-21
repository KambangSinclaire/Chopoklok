
const Menu = () => {
    return (
        <section>
            <header>
                <h1>Today's Menu</h1>
                <span></span>
            </header>
            <div className="menu-items-container"> 
                <div className="menu-item"> </div>
                <span>Menu 1</span>
                <img src={menu1}/>
                <div className="menu-item"> </div>
                <div className="menu-item"> </div>
                <div className="menu-item"> </div>
                <div className="menu-item"> </div>
            </div>
        </section>
    )
}
export default Menu;