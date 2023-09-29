
function Navbar() {
  return (
    <div>
    <div>
    <div className="navbar bg-custom-bg-color text-white">
      <div className="navbar-start">
        <a href="#" className="btn btn-ghost normal-case text-xl">Belal</a>
        <a href="/" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/" className="hover:bg-white hover:text-custom-text-color">Home</a></li>
          <li><a href="/about" className="hover:bg-white hover:text-custom-text-color">About Us</a></li>
          <li><a href="/contact" className="hover:bg-white hover:text-custom-text-color">Contact Us</a></li>
          <li><a href="/blog" className="hover:bg-white hover:text-custom-text-color">Blog</a></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  </div>    
    </div>
  )
}

export default Navbar