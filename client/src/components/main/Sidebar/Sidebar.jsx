import "./index.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsAward, BsList, BsX, BsBoxArrowInLeft } from "react-icons/bs"; // Import Bootstrap icons
import { FiBookOpen } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../../redux/api/authApiCalls";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";

const Sidebar = ({ show, toggleShow }) => {
  // const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogout = () => {
    dispatch(LogoutUser(()=>navigate("/login")));
  };

  const closeIcon = show ? <BsX size={30} /> : <BsList size={30} />;
  const logoutIcon = <BsBoxArrowInLeft />;
  const Links = [
    {
      name: "Category",
      link: "/category",
      icon: BsAward,
      show: true,
    },
    {
      name: "Book",
      link: "/book",
      icon: FiBookOpen,
      show: true,
    },
    {
      name: "Commande",
      link: "/commande",
      icon: HiMiniClipboardDocumentCheck,
      show: true,
    },
  ];

  return (
    <>
      <header className={` header ${show ? "space-toggle" : ""}`}>
        <div className="header-toggle" onClick={toggleShow}>
          {closeIcon}
        </div>
        <div> </div>
      </header>

      <aside className={show ? "sidebar show " : "sidebar"}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo d-flex align-items-center ">
         
                <img src="/llogo-removebg-preview.png" className="imag-logo" alt="logo" />
              
            </Link>

            <div className="nav-list">
              {Links.map(
                (link, index) =>
                  link.show && (
                    <NavLink
                      to={link.link}
                      className="nav-link-iteme d-flex align-items-center fw-bold"
                      key={index}
                    >
                      {<link.icon className="nav-link-icon" size={20} />}{" "}
                      {/* Render the Bootstrap icon directly */}
                      <span className="nav-link-name">{link.name}</span>
                    </NavLink>
                  )
              )}
            </div>
          </div>

          <span
            to="/logout"
            className="nav-link-iteme  d-flex align-items-center fw-bold"
            onClick={handelLogout}
          >
            {logoutIcon}
            <span className="nav-link-name">Logout</span>
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
