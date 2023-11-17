


// Add this type definition where appropriate in your code
interface ChildData {
  child: {
    child_first_name: string;
    child_last_name: string;
    child_date_of_birth: string;
    child_location: string;
    child_phone_number: string;
    status: string;
    vaccineadministration_set: Array<{
      vaccine_choice: string;
      date_of_administration: string;
    }>;
    [key: string]: any; // Add index signature
  }[];
  // Add other properties as needed
}

'use client'
import React, { useState, ChangeEvent } from 'react';
import useGetChildRecords from '../hooks/useGetChildRecords';
import { Sidebar } from '../components/Sidebar';
import SearchBar from '../atoms/Searchbar'; // Import the SearchBar component

const PAGE_SIZE = 7;
// ... (previous imports and constants)
// ... (previous imports and constants)

const ChildRecordsPage = () => {
  const childData: ChildData = useGetChildRecords();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const columns = [
    'child_first_name',
    'child_last_name',
    'child_date_of_birth',
    'child_location',
    'child_phone_number',
    'status',
    'vaccineadministration_set', // Include the vaccine column
  ];

  const columnDisplayNames: string[] = [
    'First Name',
    'Last Name',
    'Date of Birth',
    'Location',
    'Phone Number',
    'Status',
    'Vaccines', // Display name for the vaccine column
  ];

  const filteredChildRecords: ChildData['child'] = Array.isArray(childData?.child)
    ? childData?.child.filter((item) => {
        const searchTerm = searchQuery.toLowerCase();
        const isIncluded =
          columns.some((column) => {
            if (column === 'vaccineadministration_set') {
              return item[column].some(
                (vaccineAdminstrationSet) =>
                  vaccineAdminstrationSet.vaccine_choice.toLowerCase().includes(searchTerm) ||
                  vaccineAdminstrationSet.date_of_administration.toLowerCase().includes(searchTerm)
              );
            } else {
              return (item as any)[column].toLowerCase().includes(searchTerm);
            }
          });

        console.log('Search Query:', searchTerm);
        console.log('Filtered Child Records:', isIncluded);

        return isIncluded;
      })
    : [];

  const totalItems = filteredChildRecords.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Sidebar />
      <div className={`ChildRecords bg-white ml-72 mr-40 font-kumbh-sans`}>
        <h1 className='md:text-4xl text-base -ml-96 text-center font-inria-sans text-customBlue py-8 mb- font-bold'>
          Child Records
        </h1>
        {/* SearchBar component */}
        <SearchBar
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          placeholder="Search Child"
        />
        {/* Table component */}
        <table className='w-full border-collapse'>
          <thead>
            <tr>
              {columnDisplayNames.map((name) => (
                <th key={name} className='border border-gray-300 px-4 py-2'>
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredChildRecords.map((child) => (
              <tr key={child.child_first_name}>
                {columns.map((column) => (
                  <td key={column} className='border border-gray-300 px-4 py-2'>
                    {column === 'vaccineadministration_set'
                      ? child.vaccineadministration_set.map((vaccineAdminstrationSet, index) => (
                          <div key={index}>
                            Vaccine: {vaccineAdminstrationSet.vaccine_choice}, Date: {vaccineAdminstrationSet.date_of_administration}
                          </div>
                        ))
                      : child[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination component */}
        <div className='flex justify-center mt-4 -ml-60'>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              className={`px-3 py-1 mx-1 rounded-full ${
                currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChildRecordsPage;
