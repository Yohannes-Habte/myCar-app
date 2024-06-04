import "./FilterForm.css";
import { useState } from "react";

const FilterForm = () => {
  const [topping, setTopping] = useState("New");
  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };
  return (
    <div className="filter-container">
      <div className="filter-left">
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="brand-select" className="text-white">
            Brand
          </label>
          <select
            name="brand"
            id="brand-select"
            className="h-8 p-1 rounded outline-none cursor-pointer"
          >
            <option value="">All cars</option>
            <option value="bmw">BMW</option>
            <option value="ford">Ford</option>
            <option value="mercedez">Mercedez</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="brand-select" className="text-white">
            Power
          </label>
          <select
            name="brand"
            id="brand-select"
            className="h-8 p-1 rounded outline-none cursor-pointer"
          >
            <option value="">All</option>
            <option value="power">90 PS</option>
            <option value="power">150 PS</option>
            <option value="power">220 PS</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="brand-select" className="text-white">
            Year
          </label>
          <select
            name="brand"
            id="brand-select"
            className="h-8 p-1 rounded outline-none cursor-pointer"
          >
            <option value="">All</option>
            <option value="year">2024</option>
            <option value="year">2023</option>
            <option value="year">2022</option>
            <option value="year">2021</option>
            <option value="year">2020</option>
          </select>
        </div>
      </div>
      <div className="filter-middle">
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="brand-select" className="text-white">
            Color
          </label>
          <select
            name="brand"
            id="brand-select"
            className="h-8 p-1 rounded outline-none cursor-pointer"
          >
            <option value="">All colors</option>
            <option value="bmw">Black</option>
            <option value="ford">Silver</option>
            <option value="mercedez">Red</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 mb-10">
          <label htmlFor="brand-select" className="text-white">
            Price
          </label>
          <select
            name="brand"
            id="brand-select"
            className="h-8 p-1 rounded outline-none cursor-pointer"
          >
            <option value="">All Price</option>
            <option value="price">1000 - 10000 Euro</option>
            <option value="price">10000 - 20000 Euro</option>
            <option value="price">20000 - 30000 Euro</option>
            <option value="price">30000 - 40000 Euro</option>
            <option value="price">40000 and more</option>
          </select>
        </div>
        <div className="flex car-condition items-center justify-between">
          <div>
            <p>Condition</p>
          </div>

          <div className="flex gap-3">
            <div className="flex gap-1 cursor-pointer">
              <input
                type="radio"
                name="topping"
                value="New"
                id="new"
                checked={topping === "New"}
                onChange={onOptionChange}
              />
              <label htmlFor="new" className="cursor-pointer">
                New
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                name="topping"
                value="Used"
                id="used"
                checked={topping === "Used"}
                onChange={onOptionChange}
              />
              <label htmlFor="used" className="cursor-pointer">
                Used
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-right">
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="brand-select" className="text-white">
            Fuel
          </label>
          <select
            name="brand"
            id="brand-select"
            className="h-8 p-1 rounded outline-none cursor-pointer"
          >
            <option value="">All </option>
            <option value="fuel">Petrol</option>
            <option value="fuel">Diesel</option>
            <option value="fuel">Electric</option>
            <option value="fuel">Hybride</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 mb-10">
          <label htmlFor="brand-select" className="text-white">
            Transmission
          </label>
          <select
            name="brand"
            id="brand-select"
            className="h-8 p-1 rounded outline-none cursor-pointer"
          >
            <option value="">All transmission</option>
            <option value="btransmission">Automation</option>
            <option value="btransmission">Manual</option>
          </select>
        </div>
        <div className="offers">We have 145 offers</div>
      </div>
    </div>
  );
};

export default FilterForm;
