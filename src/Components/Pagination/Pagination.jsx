import React from 'react'

const Pagination = ({pageData}) => {
  return (
    <div className="w-25 p-3 m-1 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
      <h3>{pageData?.title}</h3>
      <img className="w-25" src={pageData?.images[0]} alt={pageData?.title} />
      <p>{pageData?.description}</p>
    </div>
  );
}

export default Pagination;