import { useRef } from "react";
import Collapse from "bootstrap/js/dist/collapse";

export default function NavBar() {

    const collapseRef = useRef(null);

    const closeDropDown = () => {

        if (!collapseRef.current) return;
        if (window.innerWidth >= 768) return;

        const collapse = Collapse.getInstance(collapseRef.current) || new Collapse(collapseRef.current, { toggle: false });
        collapse.hide();
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-md rounded-pill px-5 floating-nav">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#home" onClick={closeDropDown}>PM</a>

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

                <div className="collapse navbar-collapse" id="navbarLinks" ref={collapseRef}>
                    <ul className="navbar-nav ms-auto gap-3">
                        <li className="nav-item"><a className="nav-link" href="#about" onClick={closeDropDown}>/about</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects" onClick={closeDropDown}>/projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#technologies" onClick={closeDropDown}>/technologies</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact" onClick={closeDropDown}>/contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}