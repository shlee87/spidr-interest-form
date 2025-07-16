import styled from 'styled-components';
import { IMaskInput } from 'react-imask';

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.contentBackground};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  max-width: 500px;
  margin: 2rem auto;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  color: ${({ theme }) => theme.colors.primaryText};
  font-style: normal;
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  padding: 12px 15px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: rgb(150, 150, 150);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgb(86, 172, 189);
  }

  &:focus {
    outline: none;
    border-color: rgb(86, 172, 189);
  }
`;

export const StyledIMaskInput = styled(IMaskInput)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  padding: 12px 15px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: rgb(150, 150, 150);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgb(86, 172, 189);
  }

  &:focus {
    outline: none;
    border-color: rgb(86, 172, 189);
  }
`;

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  padding: 12px 24px;
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: rgb(86, 172, 189);
    border-color: rgb(86, 172, 189);
  }
`;
