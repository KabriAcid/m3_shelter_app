import { useState, useCallback } from 'react';
import { ValidationResult } from '../utils/validation';

interface FormField {
  value: string;
  error: string;
  touched: boolean;
}

interface UseFormValidationProps {
  initialValues: Record<string, string>;
  validators: Record<string, (value: string, allValues?: Record<string, string>) => ValidationResult>;
}

export const useFormValidation = ({ initialValues, validators }: UseFormValidationProps) => {
  const [fields, setFields] = useState<Record<string, FormField>>(() => {
    const initialFields: Record<string, FormField> = {};
    Object.keys(initialValues).forEach(key => {
      initialFields[key] = {
        value: initialValues[key],
        error: '',
        touched: false
      };
    });
    return initialFields;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((name: string, value: string, allValues?: Record<string, string>) => {
    const validator = validators[name];
    if (!validator) return { isValid: true };
    
    const values = allValues || Object.fromEntries(
      Object.entries(fields).map(([key, field]) => [key, field.value])
    );
    values[name] = value;
    
    return validator(value, values);
  }, [validators, fields]);

  const setFieldValue = useCallback((name: string, value: string) => {
    setFields(prev => {
      const newFields = { ...prev };
      const allValues = Object.fromEntries(
        Object.entries(newFields).map(([key, field]) => [key, key === name ? value : field.value])
      );
      
      const validation = validateField(name, value, allValues);
      
      newFields[name] = {
        value,
        error: validation.isValid ? '' : validation.error || '',
        touched: prev[name]?.touched || false
      };

      return newFields;
    });
  }, [validateField]);

  const setFieldTouched = useCallback((name: string) => {
    setFields(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        touched: true
      }
    }));
  }, []);

  const validateAllFields = useCallback(() => {
    const newFields = { ...fields };
    const allValues = Object.fromEntries(
      Object.entries(newFields).map(([key, field]) => [key, field.value])
    );

    let isFormValid = true;

    Object.keys(newFields).forEach(name => {
      const validation = validateField(name, newFields[name].value, allValues);
      newFields[name] = {
        ...newFields[name],
        error: validation.isValid ? '' : validation.error || '',
        touched: true
      };

      if (!validation.isValid) {
        isFormValid = false;
      }
    });

    setFields(newFields);
    return isFormValid;
  }, [fields, validateField]);

  const reset = useCallback(() => {
    const resetFields: Record<string, FormField> = {};
    Object.keys(initialValues).forEach(key => {
      resetFields[key] = {
        value: initialValues[key],
        error: '',
        touched: false
      };
    });
    setFields(resetFields);
    setIsSubmitting(false);
  }, [initialValues]);

  const isFormValid = Object.values(fields).every(field => !field.error && field.value.trim() !== '');

  return {
    fields,
    setFieldValue,
    setFieldTouched,
    validateAllFields,
    isFormValid,
    isSubmitting,
    setIsSubmitting,
    reset
  };
};