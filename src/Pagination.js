import React from 'react';

function Pagination(props) {
  const {
    rowPerPage = 5,
    handleRowChange,
    currentPage = 1,
    setCurrentPage,
    setPaginatedData,
    data,
    totalPages,
  } = props;
  const rowOption = [5, 10, 15, 20];

  const HandleNextPage = () => {
    const page = currentPage + 1;
    const start = rowPerPage * page - rowPerPage;
    const end = rowPerPage * page;
    setCurrentPage(page);
    setPaginatedData(data.slice(start, end));
  };

  const HandlePreviousPage = () => {
    const page = currentPage - 1;
    const start = rowPerPage * page - rowPerPage;
    const end = rowPerPage * page;
    setCurrentPage(page);
    setPaginatedData(data.slice(start, end));
  };
  return (
    <div className="pagination">
      Row per Page
      <select
        className="dropdown"
        value={rowPerPage}
        onChange={(e) => handleRowChange(e.target.value)}
      >
        {rowOption.map((size) => (
          <option value={size}>{size}</option>
        ))}
      </select>
      <button
        className="btn"
        type="button"
        disabled={currentPage === 1}
        onClick={HandlePreviousPage}
      >
        Previous
      </button>
      <div>{currentPage}</div>
      <button
        className="btn"
        type="button"
        disabled={currentPage === totalPages}
        onClick={HandleNextPage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
