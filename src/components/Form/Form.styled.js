import styled from '@emotion/styled';

export const FormWrap = styled.form`
  margin: 0 auto;
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  padding: 30px;
  background-color: lightblue;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  font-size: 12px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 200px;
  margin-left: 10px;
  border: none;
  height: 25px;
  border-radius: 3px;
  padding-left: 10px;
`;

export const BtnForm = styled.button`
  margin-top: 20px;
  padding: 7px 15px;
  border: lightgray;
  background-color: white;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 3px;

  &:hover {
    background-color: khaki;
  }
`;
