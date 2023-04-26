import React, {  useState } from "react";
import Data from '../Data';
import '../App.css';


const Card = () => {
  const [filterData, setFilterData] = useState(Data);
  const [sortValue, setSortValue] = useState("");

  

  const Filter = (str) => {
    if (str === "all") {
      setFilterData(Data);
    } else {
      setFilterData(
        Data.filter((p) => p.type.toLowerCase().includes(str.toLowerCase()))
      );
    }
  };

  const handleSort = (e) => {
    setSortValue(e.target.value);
    if (e.target.value === "a-z") {
      lowToHigh();
    }

    else if(e.target.value==="z-a"){
        highToLow();
    }
  };
  const lowToHigh = () => {
    const atoz = [...filterData];
    atoz.sort((a, b) => a.price - b.price);
    setFilterData(atoz);
  };

  const highToLow = () => {
    const ztoa = [...filterData];
    ztoa.sort((a, b) => b.price - a.price);
    setFilterData(ztoa);
  };

  return (
    <div className="main">
        <h2>Filter</h2>
      <div>
        <button
          onClick={() => {
            Filter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            Filter("Jeans");
          }}
        >
          Jeans
        </button>
        <button
          onClick={() => {
            Filter("Tshirt");
          }}
        >
          Tshirt
        </button>
        <button
          onClick={() => {
            Filter("Shoes");
          }}
        >
          Shoes
        </button>
        <button
          onClick={() => {
            Filter("Bag");
          }}
        >
          Bag
        </button>
        <button
          onClick={() => {
            Filter("Jacket");
          }}
        >
          Jackets
        </button>
      </div>

      <h3>Sort</h3>

      <div>
        
        <label htmlFor="sort"></label>
        
        <select name="sort" value={sortValue} onChange={handleSort}>
          
          <option value="a-z">Price(a-z)</option>
          <option value="z-a">Price(z-a)</option>
        </select>
      </div>

      <div className="content">
        {filterData.map((item, index) => {
          return (
            <div className="Cards">
              <div key={item.id} className="items">
                <img src={item.image} alt="item.name" />
                <p>Name-: {item.name}</p>
                <p>Price-: {item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Card;