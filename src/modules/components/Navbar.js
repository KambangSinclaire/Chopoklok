const Navbar = () => {
    return (
        <header className="bg-blue-500">
            <nav className="w-full">
                <ul className="
                w-1/2
                flex justify-around 
                items-center
                ">
                    <li className="
                    nav-styles hover:bg-orange-500
                    ">
                        <a>Home</a>
                    </li>
                    <li className="
                    nav-styles hover:bg-orange-500
                    ">
                        <a>Orders</a>
                    </li>
                    <li className="
                    nav-styles hover:bg-orange-500
                    ">
                        <a>About</a>
                    </li>
                    <li className="
                    nav-styles hover:bg-orange-500
                    ">
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;