import { listToSelectOptions } from '../utils';

export const DropdownSelection = ({ label, optionText, id, value, onChange }) => {
  const options = listToSelectOptions(optionText);
  return (
    <p>{label}</p>
      <select placeHolder='请选择'
        options={options}
        value={value}
        onChange={(v) => {
          onChange(id, v);
        }} />
    }
    }
  );
};