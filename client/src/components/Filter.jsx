import React from "react";
import stylesForm from "../styles/form.module.css";
import stylesLayout from "../styles/layout.module.css";

const Filter = ({ categories, setFilter }) => {
  return (
    <section className={stylesLayout.contentPadded}>
      <div className={stylesForm.form_select}>
        <h2 className="hide">Filter</h2>
        <select onChange={e => setFilter(e.currentTarget.value)}>
          <option value="">All categories</option>
          {categories.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Filter;
