import { useState } from 'react';

function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  return { bind: {value, onChange}, setValue }; 
}

export default useInput;