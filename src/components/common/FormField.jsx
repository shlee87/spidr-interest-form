import React from 'react';
import { FormGroup, Label, Input, StyledIMaskInput } from '../InterestForm.styles';

const FormField = ({ 
  field, 
  value, 
  onChange, 
  onMaskedChange 
}) => {
  const { id, name, label, type, mask } = field;

  if (mask) {
    return (
      <FormGroup>
        <Label htmlFor={id}>{label}</Label>
        <StyledIMaskInput
          mask={mask}
          type={type}
          id={id}
          name={name}
          value={value}
          onAccept={(value) => onMaskedChange(name, value)}
        />
      </FormGroup>
    );
  }

  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </FormGroup>
  );
};

export default FormField; 