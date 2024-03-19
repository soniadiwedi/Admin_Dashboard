import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  const data = menu;

  
  return (
    <div className="menu">
      {data?.map((el) => {
        return (
          <div className="item">
            <span className="title">{el.title}</span>
            {el.listItems?.map((item) => {
              return (
                <Link to={item.url} className="listItem">
                  <img src={item.icon} alt="" />
                  <span className="listItemTitle">{item.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
