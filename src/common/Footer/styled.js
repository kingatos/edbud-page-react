import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.alto};
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 80px;
  word-break: break-word;
  overflow-wrap: break-word;
`;

export const StyledForm = styled.form`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.alto};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: none;
  margin-bottom: 15px;
`;

export const StyledButton = styled.button`
  width: 25%;
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.rollingStone};
    transform: scale(1.05);
  }

  &:active {
    background-color: ${({ theme }) => theme.color.trout};
  }
`;

export const StyledLabel = styled.label`
  padding: 20px 0;
  font-size: 28px;
`;

export const StyledPlace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    text-align: center;
  }
`;

export const StyledButtonPhone = styled.a`
  padding: 10px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    align-items: center;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.rollingStone};
    transform: scale(1.20);
  }

  &:active {
    background-color: ${({ theme }) => theme.color.trout};
  }
`;
