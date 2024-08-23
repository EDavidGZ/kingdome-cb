import { Link } from "react-router-dom";

import Person4RoundedIcon from "@mui/icons-material/Person4Rounded";
import NavMenu from "./NavMenu";

import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";

const Bar = () => {

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* <!-- Mobile menu toggle button --> */}
        <div
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          {" "}
          <NavMenu />
        </div>
        {/* <!-- Logo and site name --> */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="logo.png" className="h-8" alt="ICB Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Kingdom-CB
          </span>
        </Link>
        {/* <!-- Desktop menu items --> */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
           {/* TEST */}
            <li>
              <Dropdown>
                <MenuButton
                  variant="plain"
                  color="primary"
                  size="lg"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Tests
                </MenuButton>
                <Menu variant="plain" color="primary" size="lg">
                  <MenuItem>
                    <Link to="/level-test">Level test</Link>
                  </MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu>{" "}
              </Dropdown>
            </li>
            {/* TOPICS */}
            <li>
              <Dropdown>
                <MenuButton
                  variant="plain"
                  color="primary"
                  size="lg"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Topics
                </MenuButton>
                <Menu variant="plain" color="primary" size="lg">
                  <MenuItem>
                    <Link to="/topics-first-book">First Book</Link>
                  </MenuItem>
                  <MenuItem>Second Book</MenuItem>
                </Menu>{" "}
              </Dropdown>
            </li>
            {/* PROFILE */}
            <li>
              <Dropdown>
                <MenuButton
                  variant="plain"
                  color="danger"
                  size="lg"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  <Person4RoundedIcon />{" "}
                </MenuButton>
                <Menu variant="plain" color="danger" size="lg">
                  <MenuItem>
                    <Link to="/signin">Sing out</Link>
                  </MenuItem>
                  <MenuItem>
                  <Link to="/signin">Sing in</Link>
                  </MenuItem>
                </Menu>{" "}
              </Dropdown>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Bar;
