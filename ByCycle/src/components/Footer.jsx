import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export function Footer({ nameApp }) {
  const data = new Date();
  const year = data.getFullYear();
  return (
    <div className="footer">
      <div className="container-fluid text-md-left">
        <div className="row">
          <div className="col-md-5 mt-md-0 mt-3">
            <h5 className="footer-title">ByCycle</h5>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-1 mb-md-0 mb-3">
            <h5 className="footer-links">Collegamenti Utili</h5>
            <ul className="list-unstyled">
              <li>
                <a className="footer-list-links" href="#!">
                  Contattaci
                </a>
              </li>
              <li>
                <a className="footer-list-links" href="#!">
                  Informazioni su di noi
                </a>
              </li>
              <li>
                <a className="footer-list-links" href="#!">
                  FAQ
                </a>
              </li>
              <li>
                <a className="footer-list-links" href="#!">
                  La nostra privacy
                </a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-2 mb-md-0 mb-3">
            <h5 className="footer-contacts">Contatti</h5>
            <div>
              <ul className="list-unstyled">
                <li>
                  <p>Via Thailandia 6, Nowhere, 10010 (BO)</p>
                </li>
                <li>
                  <p>+39 3334445566</p>
                </li>
                <li>
                  <p>bycylesrl@email.it</p>
                </li>
              </ul>
              <div className="footer-social-links ">
                <a className="footer-social-icon" href="">
                  <FaFacebookSquare
                    size={30}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#0866FF")
                    }
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
                </a>
                <a className="footer-social-icon" href="">
                  {" "}
                  <FaInstagram
                    size={30}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#B225CA")
                    }
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
                </a>
                <a className="footer-social-icon" href="">
                  {" "}
                  <FaXTwitter
                    size={30}
                    onMouseOver={({ target }) => (target.style.color = "grey")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
                </a>
                <a className="footer-social-icon" href="">
                  <FaLinkedin
                    size={30}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#126BC4")
                    }
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
                </a>
              </div>

              <hr className="clearfix w-100 d-md-none pb-0" />
            </div>
          </div>
          <section className="col-md-2 mb-md-0 mb-3">
            <h4>Iscriviti alla nostra newsletter</h4>
            <div>
              <input type="text" placeholder="Inserisci la tua email" />
              <button>Invia</button>
            </div>
          </section>
        </div>
      </div>
      <span>
        © Copyright {year} {nameApp}
      </span>
    </div>
  );
}
