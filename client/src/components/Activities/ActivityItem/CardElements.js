import styled from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 350px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background-color:#fff4f4;
  position:relative;
  @media (max-width: 760px) {
    width: 70%;
}
`;

export const CardHeader = styled.header`
  text-align:center;
  width:100%;
`;

export const CardHeading = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  width:100%;
  background-color:#fff4f4;
  img{
    width:100%;
  }
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
  padding-bottom: 32px;
`;

export const CardFooter = styled.div`
    padding-top: 32px;
    padding-bottom: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 4px;
  }

  &:nth-last-of-type(2) {
    margin-top: 12px;
  }

  &:last-of-type {
    text-align: center;
  }
`;


export const CardOptionsNoteHeader = styled.small`
  font-family: "Permanent Marker", cursive;
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
`;
export const CardOptionsNoteHeader2 = styled.div`
  font-family: "Karla",sans-serif!important;
  font-weight: bold;
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
`;

export const CardOptionsNote = styled.small`

  font-family: "Karla",sans-serif!important;
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;
export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.button`
  
  font-family: "Karla",sans-serif!important;
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #a2ccb6;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;