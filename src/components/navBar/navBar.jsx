import logo from "../../assets/logo.png";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo da navbar" />
      </div>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Projetos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sobre
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contato
          </a>
        </li>
      </ul>
      <form>
        <button>Login</button>
        <button>Se Cadastre</button>
      </form>
    </nav>
  );
};

export default NavBar;
