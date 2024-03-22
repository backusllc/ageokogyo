import React from "react"; /* eslint-disable */
import { label, selectBox, variantContainer } from "./VariantSelectors.css";

const VariantSelector = ({ key, onChange, options }: any) => {
  return (
    <div className={variantContainer} key={key}>
      <label className={label}>{options.name} </label>
      <select onChange={onChange} name={options.name} key={options.id} className={selectBox}>
        {options.values.map((value: string) => (
          <option key={`${options.name}-${value}`} value={value} className="is-medium">
            {`${value}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VariantSelector;
