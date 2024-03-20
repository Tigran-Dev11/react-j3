import React, { useState } from "react";
import { UseFetch } from "../../hooks/use-fetch";
import { API } from "../../config/api";
import ReactPaginate from "react-paginate";
import css from "./panginate.module.scss";
import { ProductCard } from "../product-card/productCard";
const Panginate = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 4;
  const [data] = UseFetch({ url: `${API.productTwo}` });

  const pageCount = Math.ceil(data?.length / itemsPerPage);
  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = data?.slice(pagesVisited, pagesVisited + itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={css.paginationContainer}>
      <div className={css.pagenationItem}>
        {displayItems?.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
      <div className={css.pages}>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Panginate;
