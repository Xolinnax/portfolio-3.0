import React from "react";

function Footer()
{
    return (
            <div className="container footer">
                <footer className="py-3 my-2">
                    <ul className="nav justify-content-center border-bottom pb-1 mb-3">
                    <li className="nav-item">
                        <a href="https://www.linkedin.com/in/ashwin-suresh-9b7a79275/" className="nav-link px-2 text-light">
                        LinkedIn
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/Xolinnax" className="nav-link px-2 text-light">
                        GitHub
                        </a>
                    </li>
                    </ul>
                    <p className="text-center text-light">© Ashwin Suresh Babu</p>
                    <p className="text-center text-light">ashwinsbabu@hotmail.com</p>
                </footer>
            </div>);
}

export default Footer;