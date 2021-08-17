import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const SearchForm = styled.form`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  @media (min-width: ${(props) => props.theme.mediaQueries.sm}) {
    padding: 3rem;
  }
`;

export const SearchDatePickerContainer = styled.div`
  position: relative;
  display: flex;
  @media (min-width: ${(props) => props.theme.mediaQueries.sm}) {
    display: flex;
  }
  > div {
    &:nth-child(1) input {
      border-radius: 30px 0 0 30px;
    }
    &:nth-child(2) input,
    &:nth-child(3) input {
      border-left: ${(props) => `1px solid ${props.theme.colors.grey.light}`};
      border-radius: 0 30px 30px 0;
      padding-right: 4rem;
    }
  }
  .react-datepicker {
    border: 0;
  }
  .react-datepicker-wrapper {
    width: 50%;
    @media (min-width: ${(props) => props.theme.mediaQueries.sm}) {
      width: 100%;
    }
  }
  .react-datepicker-popper {
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker__month-container {
    box-shadow: rgb(0 0 0 / 40%) 0px 6px 20px;
  }
  .react-datepicker__navigation--previous {
    left: 35px;
  }
  .react-datepicker__navigation--next {
    right: 35px;
  }
  .react-datepicker__navigation {
    top: 18px;
    span:before {
      border-color: ${(props) => props.theme.colors.grey.dark};
    }
  }
  .react-datepicker__header {
    background: none;
    border: 0;
    padding: 1.5rem 1.5rem 0.5rem;
  }
  .react-datepicker__current-month {
    font-size: 1.25rem;
    padding-bottom: 1rem;
  }
  .react-datepicker__month {
    padding: 1rem 1.5rem;
  }
  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 2.7rem;
  }
`;

export const SearchDatePicker = styled(DatePicker)`
  background: ${(props) => props.theme.colors.white};
  padding: 1.5rem 1rem;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  border: 0;
  @media (min-width: ${(props) => props.theme.mediaQueries.sm}) {
    min-width: 200px;
  }
`;

export const SearchButton = styled.button`
  background: ${(props) => props.theme.colors.teal};
  color: ${(props) => props.theme.colors.white};
  border: 0;
  outline: none;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
  }
`;
