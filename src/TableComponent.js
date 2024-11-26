import React from 'react';

function TableComponent(props) {
  const { TableData = [], TableHeader = [] } = props;
  return (
    <div className="table-container">
      <div id="table">
        {TableHeader.length > 0 && (
          <table>
            <thead>
              <tr>
                {TableHeader.map((header) => (
                  <th>{header?.lable}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TableData.map((data) => (
                <tr>
                  {TableHeader.map((header) => (
                    <td>{data[header.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default TableComponent;
