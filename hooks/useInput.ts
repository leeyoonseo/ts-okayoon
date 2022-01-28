import { useState, useCallback } from 'react';

const useInput = (
  initialValue: string,
): [
  string,
  (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [value, setValue] = useState<string>(initialValue);

  const handler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
