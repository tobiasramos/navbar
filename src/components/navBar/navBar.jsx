import logo from "../../assets/logo.png"
const NavBar=()=>{
    return(
        <nav>
            <div>
                <img src={logo} alt="Logo da navbar" />
            </div>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>

            <button>Login</button>
            <button>Se Cadastre</button>
            
        </nav>
    )
}

export default NavBar