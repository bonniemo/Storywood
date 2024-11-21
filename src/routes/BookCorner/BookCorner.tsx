import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const BookCorner = () => {
  return (
    <article className="flex row-auto">
      <nav className=" min-w-max border-r-4 border-stone-900 flex p-10">
        <ul className="flex flex-col gap-8">
          <li>
            <NavLink className="hover:font-bold" to="/BookCorner">
             
              My Favourite <span className="block">Books</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:font-bold"
              to="/BookCorner/FavouriteAuthors"
            >
             
              My Favourite <span className="block">Authors</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:font-bold" to="/BookCorner/ReadBooks">
              
              My Reading <span className="block">History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:font-bold"
              to="/BookCorner/ReadingStatistics"
            >
            
              My Reading <span className="block">Statistics</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </article>
  );
};
export default BookCorner;