import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;