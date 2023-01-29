import PropTypes from 'prop-types';
import { FilterWrap, LabelFilter, InputFilter } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrap>
      <LabelFilter>
        Find contacts by name
        <InputFilter
          type="text"
          value={value}
          onChange={onChange}
        ></InputFilter>
      </LabelFilter>
    </FilterWrap>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
