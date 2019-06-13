import React from "react";
import stylesForm from "../styles/form.module.css";
import stylesLayout from "../styles/layout.module.css";
import styles from "./Filter.module.css";

const Filter = ({ categories, setFilter, filter }) => {
  console.log(filter);

  return (
    <section className={stylesLayout.contentPadded}>
      <div className={stylesForm.form_select}>
        <h2 className={styles.hide}>Filter</h2>
        <ul className={styles.filterList}>
          {categories.map(category => (
            <li className={styles.filterItem} key={category}>
              <input
                className={`${stylesForm.radioButton} ${
                  filter === category ? styles.active : ``
                }`}
                type="radio"
                id={category}
                name="show-filter"
                value={category}
                onChange={e => setFilter(e.currentTarget.value)}
              />
              <label htmlFor={category}>{category}</label>
            </li>
          ))}
        </ul>
        {/* <select onChange={e => setFilter(e.currentTarget.value)}>
          <option value="">All categories</option>
          {categories.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select> */}
      </div>
    </section>
  );
};

export default Filter;
