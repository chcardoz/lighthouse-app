import React, { useState, useContext, createContext } from 'react';
import { meetings } from '../public/mock-data/meetings';
import { students } from '../public/mock-data/students';
import CalculateStatus from './calculateStatus';

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export function SearchProvider({ children }) {
  const search = useSearchProvider();
  return (
    <SearchContext.Provider value={search}>{children}</SearchContext.Provider>
  );
}

function useSearchProvider() {
  const [allStudents, setAllStudents] = useState(CalculateStatus(students));
  const [allMeetings, setAllMeetings] = useState(meetings);
  const [filteredStudent, setFilteredStudents] = useState(
    CalculateStatus(students)
  );

  const FilterStudents = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    const filtered = students.filter((student) =>
      student.name.toLowerCase().includes(searchValue)
    );
    setFilteredStudents(filtered);
  };

  const AddMeeting = (newMeeting) => {
    setAllMeetings([...allMeetings, newMeeting]);
  };

  return {
    allStudents,
    allMeetings,
    setAllMeetings,
    filteredStudent,
    FilterStudents,
  };
}
