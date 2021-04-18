import { NavLink } from "react-router-dom";

// const buttons = [
//     {
//         link: "/map",
//         text: "Карта",
//     },
//     {
//         link: "/analytics",
//         text: "Аналитика",
//     },
//     {
//         link: "/about",
//         text: "О нас",
//     },
// ];

// const logo = (
//     <svg width="42" height="46" viewBox="0 0 24 24">
//         <path
//             fill="currentColor"
//             d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
//         />
//     </svg>
// );

function Navbar(props) {
    const logo = props.logo ? props.logo : null;
    const styles = props.styles
        ? props.styles
        : {
              bgColor: "bg-white",
              textColor: "text-gray-700",
              activeColor: "#F472B6",
              hoverColor: "border-indigo-400",
          };
    const buttons = props.buttons ? props.buttons : null;

    return (
        <header
            className={
                "navbar lg:px-14 flex flex-wrap items-center lg:py-0 py-2 " +
                styles.bgColor
            }
        >
            {logo}
            <div
                className="hidden lg:flex lg:items-center lg:w-auto w-full lg:mx-4"
                id="menu"
            >
                <nav>
                    <ul
                        className={
                            "lg:flex items-center justify-between text-base pt-4 lg:pt-0 " +
                            styles.textColor
                        }
                    >
                        {buttons
                            ? buttons.map((button) => {
                                  return (
                                      <NavLink
                                          className={
                                              "lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:" +
                                              styles.hoverColor
                                          }
                                          activeStyle={{
                                              borderColor: styles.activeColor,
                                          }}
                                          to={button.link}
                                      >
                                          {button.text}
                                      </NavLink>
                                  );
                              })
                            : null}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
