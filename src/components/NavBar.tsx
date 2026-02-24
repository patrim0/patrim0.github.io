import 'react';

export default function NavBar() {

    return (
        <div>
            <nav className="navbar m-5 bg-dark rounded-pill bg-opacity-25 px-5">
                <div className="container-fluid">
                    <a className="navbar-brand text-light fw-bold" href="#">Patrick Mombleau</a>
                    <div className="navbar-nav">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active text-light fw-bold" aria-current="page" href="#">/home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">/about</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">/projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}