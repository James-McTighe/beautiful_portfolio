import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10, 0.8)] backdrop-blue-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="https://github.com/james-mctighe" className='font-mono text-xl font-bold text-white'>
            {" "}
            github.com/<span className="relative transition-colors duration-300 
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
              after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all 
              after:duration-300 hover:after:w-full">
              james-mctighe
            </span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href='#home'
              className="navbar-element"
            >
              {" "}
              Home {" "}
            </a>
            <a
              href='#about'
              className="navbar-element"
            >
              {" "}
              About {" "}
            </a>
            <a
              href='#projects'
              className="navbar-element"
            >
              {" "}
              Projects {" "}
            </a>
            <a
              href='#contact'
              className="navbar-element"
            >
              {" "}
              Contact {" "}
            </a>
          </div>

        </div>
      </div>
    </nav>
  )
}
