'use client'
import React, { useState } from 'react';
import DataGrid from '../atoms/DataGrid';
import SearchBar from '../atoms/Searchbar';
import useGetChildRecords from '../hooks/useGetChildRecords';


import { Sidebar } from '../components/Sidebar';
const PAGE_SIZE = 15;
const ChildRecordsPage = () => {
  const ChildData = useGetChildRecords()
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };
  const numColumns = 5;
  const columns = [ 'child_first_name','child_last_name','child_date_of_birth','child_location','child_phone_number','guardian_name'];
  const columnDisplayNames: string[] = ['First Name','Last Name','Date of Birth','Location','Phone Number','Guardian'];
  const filteredChildRecords = ChildData?.child.filter((item) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      item.child_first_name.toLowerCase().includes(searchTerm) ||
      item.child_last_name.toLowerCase().includes(searchTerm) ||
      item.child_date_of_birth.toLowerCase().includes(searchTerm) ||
      item.child_location.toLowerCase().includes(searchTerm) ||
      item.child_phone_number.toLowerCase().includes(searchTerm) ||
      item.guardian_name.toLowerCase().includes(searchTerm)
    );
  });
  const totalItems = filteredChildRecords.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Sidebar/>
    <div className={`ChildRecords bg-white ml-72 mr-40 font-kumbh-sans`}>
      <h1 className='md:text-4xl text-base -ml-96 text-center font-inria-sans text-customBlue py-8 mb- font-bold'>
        Child Records
      </h1>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        placeholder="Search Child"
      />
      <table className='w-full border-collapse'>
        <tbody>
          <DataGrid
            data={filteredChildRecords}
            columns={columns}
            columnDisplayNames={columnDisplayNames}
            currentPage={currentPage}
            pageSize={PAGE_SIZE}
            isCheckBox={true}
            itemColumnKey="child_first_name"   />
        </tbody>
      </table>
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