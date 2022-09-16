import "./index.scss";
import { publicRequest } from "../../requestMethod";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function SearchBar({ placeholder }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [word, setWord] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CLIENT_URL}/api/products`
        );
        setData(res.data);
      } catch (err) {}
    };
    getData();
  }, []);

  const handleSearch = (event) => {
    // looking up input value
    const searchWord = event.target.value;
    setWord(searchWord);
    // filter matching results from data
    const newSearch = data.filter((value) => {
      // rmb capital
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    // change state
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newSearch);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWord("");
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder={placeholder}
          value={word}
          onChange={handleSearch}
        />

        <div className="search-icon">
          {/* change icon when no input */}
          {filteredData.length === 0 ? (
            <SearchOutlined />
          ) : (
            <CloseIcon onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="search-result">
          {/* limit search result up to 5 to reduce data load */}
          {filteredData.slice(0, 5).map((value) => {
            return (
              <a
                key={uuidv4()}
                href={`${process.env.FRONTEND_URL}/product/${value._id}`}
                target="_blank"
              >
                {value.title}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
