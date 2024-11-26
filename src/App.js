import React, { useEffect, useState } from 'react';
import './App.css';
import TableComponent from './TableComponent';
import Pagination from './Pagination';

function App() {
  const [data, setData] = useState([]);
  const [rowPerPage, setRowPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);
  const [totalPages, setTotalPage] = useState(1);

  const tableHeaders = [
    { key: 's.no', lable: 'S.No.' },
    { key: 'percentage.funded', lable: 'Percentages Funded' },
    { key: 'amt.pledged', lable: 'Amount Pledged' },
  ];

  const getData = () => {
    const url = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';
    try {
      fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((res) => {
          setData(res);
          setPaginatedData(res.slice(0, rowPerPage));
          setTotalPage(Math.ceil(res.length / rowPerPage));
        });
    } catch (err) {
      console.log('Failed to fetch the records');
    }
  };

  useEffect(() => {
    if (data.length === 0) {
      getData();
    }
  }, []);

  const handleRowChange = (noOfRows) => {
    setRowPerPage(noOfRows);
    setPaginatedData(data.slice(0, noOfRows));
    setTotalPage(Math.ceil(data.length / noOfRows));
    setCurrentPage(1);
  };

  if (data.length === 0) {
    return <div className="loader">Data Loading....</div>;
  }
  return (
    <div className="Container">
      <TableComponent TableData={paginatedData} TableHeader={tableHeaders} />
      <Pagination
        data={data}
        setPaginatedData={setPaginatedData}
        rowPerPage={rowPerPage}
        handleRowChange={handleRowChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
