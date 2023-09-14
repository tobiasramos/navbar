import "../../App.css";
import logo from "../../assets/logo.png";
const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navContainer">
      <div className="container-fluid">
        <div className="logo ms-2">
          <img src={logo} alt="Logo da navbar" />
          <p>Free Code</p>
        </div>
        <button
          className="navbar-toggler border"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav nav-tabs me-auto">
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
                    <hr className="dropdown-divider"></hr>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
