import "../../App.css";
import logo from "../../assets/logo.png";
const NavBar = () => {
  return (
    <nav className="navbar navContainer">
      <div className="logo ms-3">
        <img src={logo} alt="Logo da navbar" />
        <p>Free Code</p>
      </div>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
          >
            Projetos
          </a>
          <ul className="dropdown-menu menuContainer">
            <li>
              <a className="dropdown-item" href="#">
                Arco
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Kanban
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Pokedex
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"></hr>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Mais...
              </a>
            </li>
          </ul>
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
      <form className="d-flex me-3">
        <button className="btn btn-outline-light me-2">Login</button>
        <button className="btn btn-primary">Se Cadastrar</button>
      </form>
    </nav>
  );
};

export default NavBar;
