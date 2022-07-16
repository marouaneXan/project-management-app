import logo from "./assets/graphql.png";
const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
          <img src={logo} alt="" />
          <div>Project management</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
