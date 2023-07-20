import styled from 'styled-components';
import { Button } from 'antd';
import { Form } from 'formik';

export const EditPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UrlCard = styled.div`
  width: 400px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FieldContainer = styled.div`
  margin-bottom: 10px;
`;

export const ErrorText = styled.div`
  color: red;
  margin-top: 5px;
`;

export const SubmitButton = styled(Button)`
  margin-right: 10px;
`;

export const DeleteButton = styled(Button)`
  margin-top: 10px;
`;