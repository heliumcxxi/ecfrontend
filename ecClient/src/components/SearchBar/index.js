import "./index.scss";
import { publicRequest } from "../../requestMethod";
import { useEffect } from "react";
import { SearchOutlined } from "@mui/icons-material";

const searchBar = ({ placeholder, data }) => {
  return (
    <div className="container">
      <div className="search-bar">
        <input placeholder={placeholder} />

        <div className="search-icon">
          <SearchOutlined />
        </div>
      </div>
      <div className="search-result">
        {data.map((value) => {
          const title = value.title;
          return <p>{title}</p>;
        })}
      </div>
    </div>
  );
};

export default searchBar;
