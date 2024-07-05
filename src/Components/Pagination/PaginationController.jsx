import React, { useState, useEffect } from "react";

import Pagination from "./Pagination";

const PaginationController = () => {
  const [pageData, setPageData] = useState(null);
  const [page, setPage] = useState(0);

  async function fetchData() {
    const data = await fetch("https://dummyjson.com/products/search?q=phone");
    const jsondata = await data.json();
    console.log(jsondata?.products?.length);
    setPageData(jsondata);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center fw-bold">Pagination</h1>
      <div className="d-flex flex-wrap">
        {pageData &&
          pageData?.products
            ?.slice(page * 10, page * 10 + 10)
            .map((item) => <Pagination key={item?.id} pageData={item} />)}
      </div>
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => {
            setPage(page > 0 ? page - 1 : null);
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationController;
