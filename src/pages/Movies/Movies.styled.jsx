import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const MovieHeader = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #C0C0C0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormElement = styled(Form)`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;
export const FormField = styled(Field)`
  width: 300px;
  height: 20px;
  border-radius: 15px;
  outline-color: #008B8B;
  border: none;
  padding: 10px;
  font-weight: 500;
  font-size: 20px;
  color: #008080
`;

export const Button = styled.button`
  display: inline-block;
  width: 120px;
  height: 40px;
  position: relative;
  border: 0;
  opacity: 0.6;
  border-radius: 15px;
  background-color: #008080;
  color: #008080
  cursor: pointer;
  outline: none;
  font-weight: 500;
  font-size: 20px;
`;

export const InfoHeader = styled.p`
  margin-top: 30px;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-left: 10px;
  color: #570434;
`;