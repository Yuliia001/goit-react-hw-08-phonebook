import styled from 'styled-components';

export const Text = styled.p`
  color: #d54e20;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const Button = styled.button`
  width: 200px;
  padding: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 20px;
  cursor: pointer;
  background-color: #136393;
  color: #fff; 
  transition: background-color 0.3s ease-in-out;
  &:hover,
  &:focus {
    background-color: #3799D2;
    transform: scale(1.05);
  }
}
`;
