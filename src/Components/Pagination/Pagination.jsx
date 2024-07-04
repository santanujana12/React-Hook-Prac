import React from 'react'

const Pagination = ({pageData}) => {
  return (
    <div className="w-25 p-3 m-1 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
      <img src={pageData?.thumbnailUrl} alt={pageData?.title} />
      <h3>{pageData?.title}</h3>
    </div>
  );
}

export default Pagination;