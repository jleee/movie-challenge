import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchForm, SearchDatePickerContainer, SearchDatePicker, SearchButton } from './SearchBarStyles';
import 'react-datepicker/dist/react-datepicker.css';

interface SearchBarProps {
  handleSearchSubmit: (e: React.FormEvent) => void;
  setStartDate: (value: Date) => void;
  setEndDate: (value: Date) => void;
  startDate: Date;
  endDate: Date;
}

const SearchBar: FunctionComponent<SearchBarProps> = (props) => {
  const { handleSearchSubmit, startDate, endDate, setStartDate, setEndDate } = props;
  return (
    <SearchForm onSubmit={handleSearchSubmit}>
      <SearchDatePickerContainer>
        <SearchDatePicker
          placeholderText="Start Date"
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
        <SearchDatePicker
          placeholderText="End Date"
          dateFormat="yyyy-MM-dd"
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
        />
        <SearchButton type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </SearchDatePickerContainer>
    </SearchForm>
  );
};

export default SearchBar;
