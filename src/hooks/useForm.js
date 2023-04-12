import { useMemo, useState } from 'react';

const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const formValidator = useMemo(
    () =>
      Object.keys(formValidations).reduce((acc, formField) => {
        const [fn, errorMessage] = formValidations[formField];

        const fieldName = `${formField}Valid`;
        const fieldErrorMessage = fn(formState[formField])
          ? null
          : formState[formField].length === 0
          ? 'This field is required'
          : errorMessage;

        return {
          ...acc,
          [fieldName]: fieldErrorMessage,
        };
      }, {}),
    [formState]
  );

  const isFormValid = useMemo(
    () => Object.values(formValidator).every((value) => value === null),
    [formValidator]
  );

  return {
    formState,
    isFormValid,
    onInputChange,
    onResetForm,
    ...formState,
    ...formValidator,
  };
};

export default useForm;
