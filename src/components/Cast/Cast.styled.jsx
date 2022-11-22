import styled from '@emotion/styled';


export const CastWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;
export const CastWarning = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-left: 10px;
  color: #008080;
`;

export const CastItem = styled.li`
    margin-bottom: 10px;
    width: 280px;
    border: 2px solid #008080;
    display: flex;
    padding: 15px;
    border-radius: 15px;
    margin-right: 10px;
`;

export const CastInfo = styled.p`
  margin-top: 8px;
  font-size: 16px;
`;

export const CastInfoWrapp = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center; 
    margin-left: 5px; 
`;