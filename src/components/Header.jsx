import {useState} from "react";
import AdvanceSearch from "./AdvanceSearch";

function Header({searchData, setsearchData}) {

  const handleSearch = () => {
    setOpen(!open)
    setsearchData([])
  }

  const [open, setOpen] = useState(false)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 text-white" href="/">
            rightmove
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_search"
            aria-controls="navbar_search"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse my-3 my-lg-0" id="navbar_search">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <button className="btn btn-primary mx-2 my-2 my-lg-0 fw-semibold" onClick={ handleSearch }>Advanced Search</button>
            </ul>
          </div>
        </div>
      </nav>
      {open && <AdvanceSearch searchData={searchData} setsearchData={setsearchData}/>}
    </div>
  );
}

export default Header;
