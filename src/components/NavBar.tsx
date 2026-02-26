export default function NavBar() {

    return (
        <nav className="navbar navbar-dark navbar-expand-md rounded-pill px-5 floating-nav">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#home">PM</a>

                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarLinks"
                    aria-controls="navbarLinks"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarLinks">
                    <ul className="navbar-nav ms-auto gap-3">
                        <li className="nav-item"><a className="nav-link" href="#about">/about</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">/projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#technologies">/technologies</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">/contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}