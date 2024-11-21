import { NavLink, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center border-b-4 border-stone-900">
        <h1 className="ml-10 mx-2 text-2xl font-serif italic">SW</h1>
        <ul className="flex gap-5 p-4">
          <li className="flex items-center ">
            <NavLink to="/" className="hover:font-bold">
              Home
            </NavLink>
          </li>
          <details className="dropdown">
            <summary className="btn m-1">              
                  My Book Corner
              </summary>            
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">

                <li>
                  <NavLink
                    to="/FavouriteBooks"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Favourite Books
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/ReadBooks"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Read Books
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/FavouriteAuthors"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Favourite Authors
                  </NavLink>
                </li>

              </ul>
          </details>            
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
