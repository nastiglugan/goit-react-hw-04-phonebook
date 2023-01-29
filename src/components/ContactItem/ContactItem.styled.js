import styled from '@emotion/styled';

export const ContactItemWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  background-color: white;
  padding-left: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 3px;
  margin-bottom: 10px;
`;

export const ListItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;
export const Item = styled.li``;

export const DeleteBtn = styled.button`
  border: lightgray;

  background-color: lightgrey;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 3px;
  margin-left: 10px;
  margin-right: 2px;

  &:hover {
    background-color: khaki;
  }
`;
