'use client'
import React, { useState, ChangeEvent, useEffect } from 'react';
import Link from 'next/link';
import DataGrid from '../atoms/DataGrid';
import SearchBar from '../atoms/Searchbar';
import useGetChvs from '../hooks/useGetChvs';
import { Sidebar } from '../components/Sidebar';

const PAGE_SIZE = 10;

const CHVPage = () => {
  const chvs = useGetChvs(); 

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
    

  };

  const numColumns = 5;

  const columns = ['first_name', 'last_name', 'email', 'phone_number', 'hospital'];
  const columnDisplayNames: string[] = ['First Name', 'Last Name', 'Email', 'Phone Number', 'Hospital'];

  const filteredCHV = chvs.chvs.filter((item) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      item.first_name.toLowerCase().includes(searchTerm) ||
      item.last_name.toLowerCase().includes(searchTerm) ||
      item.phone_number.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm) ||
      item.hospital.toLowerCase().includes(searchTerm)
    );
  });
  console.log('Filtered CHVs:', filteredCHV);


  const totalItems = filteredCHV.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Sidebar/>
    <div className="CHV bg-white ml-96 font-kumbh-sans">
      <h1 className="md:text-30 text-base -ml-96 text-center font-inria-sans text-customBlue py-8 mb- font-bold">
        Community Health Volunteers
      </h1>

      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        placeholder="Search by name, location, or hospital"
      />

      <table className="w-4/5 border-collapse text-18">
        <tbody>
          <DataGrid
            data={filteredCHV}
            columns={columns}
            columnDisplayNames={columnDisplayNames}
            currentPage={currentPage}
            pageSize={PAGE_SIZE}
            isCheckBox={true}
            itemColumnKey="first_name"
          />
        </tbody>
      </table>
      <div className="flex justify-center mt-4 -ml-60">
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

      <div className="fixed bottom-20 right-20">
        <Link href="/chvRegistration">
          <button className="bg-customBlue text-white px-4 py-3 rounded-full place-self-center">
            <span className="text-3xl" style={{ lineHeight: '0.7' }}>
              +
            </span>
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default CHVPage;