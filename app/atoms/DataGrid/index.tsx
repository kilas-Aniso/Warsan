
import React, { useState } from 'react';
interface DataGridProps {
  data: Array<any>;
  columns: Array<string>;
  columnDisplayNames: Array<string>;
  currentPage: number;
  pageSize: number;
  isCheckBox?: boolean;
  itemColumnKey: string; // New prop for dynamic item column
}
const DataGrid = ({
  data,
  columns,
  columnDisplayNames,
  currentPage,
  pageSize,
  isCheckBox,
  itemColumnKey, // New prop for dynamic item column
}: DataGridProps) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);
  const [checkboxState, setCheckboxState] = useState(currentData.map(() => false));
  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxState = [...checkboxState];
    updatedCheckboxState[index] = !updatedCheckboxState[index];
    setCheckboxState(updatedCheckboxState);
  };
  return (
    <table className='w-full border-collapse'>
      <thead>
        <tr>
          {columnDisplayNames.map((columnName, index) => (
            <th key={index} className='border border-customBlue px-4 py-2 font-bold text-start flex-1'>
              {columnName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentData.map((item, rowIndex) => (
          <tr key={rowIndex} className='border border-gray-300'>
            <td className='border border-customBlue px-4 py-4 flex-1'>
              {isCheckBox && (
                <input
                  type="checkbox"
                  className='mr-3 h-4 w-4 rounded-lg font-bold'
                  checked={checkboxState[rowIndex]}
                  onChange={() => handleCheckboxChange(rowIndex)}
                />
              )}
              {item[itemColumnKey]} {/* Use the dynamic item column key */}
            </td>
            {columns.slice(1).map((columnKey, columnIndex) => (
              <td key={columnIndex} className='border border-customBlue px-4 py-2 flex-1'>
                {item[columnKey]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DataGrid;







