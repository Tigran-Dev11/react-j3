import React, { useState } from "react";
import css from "./shop.module.scss";
import { UseFetch } from "../../hooks/use-fetch";
import { API } from "../../config/api";
//import { ProductCard } from "../../components/product-card/productCard";
import Loader from "../../common/loader/loader";
import Input from "./../../common/input/input";
import Panginate from "../../components/pangination/panginate";

const Shop = () => {
  const [data, loading] = UseFetch({ url: `${API.productTwo}` });

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      <form onChange={handleSearchInputChange}>
        <Input
          variant="secondary"
          placeholder="Search by title..."
          value={searchQuery}
        />
      </form>
      <div className={css.filtercontainer}>
        <Panginate  data={filteredData}/>
      </div>
    </div>
  );
};

export default Shop;
