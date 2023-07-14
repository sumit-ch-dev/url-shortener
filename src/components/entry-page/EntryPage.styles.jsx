import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Button } from 'antd';

export const StyledEntryPage = styled.div`
  padding: 16px;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledField = styled(Field)`
  padding: 8px;
  margin-bottom: 8px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorContainer = styled.div`
  color: red;
  margin-bottom: 8px;
`;

export const StyledButton = styled(Button)`
  width: 100px;
`;

export const UrlContainer = styled.div`
  margin-top: 16px;

  div {
    margin-bottom: 8px;
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
  }
`;

