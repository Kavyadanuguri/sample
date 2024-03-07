import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`

export const GamingMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  background-color: #f4f4f4;
`
export const GamingContainer1 = styled.div`
  background-color: #ebebeb;
  width: 100%;
  height: 150px;
`
export const GamingCon1 = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 80px;
  padding-top: 50px;
`
export const GamingFireContainer = styled.div`
  background-color: #cbd5e1;
  border-radius: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
`
export const GamingHeading1 = styled.h1`
  font-family: 'roboto';
  font-weight: bold;
  color: #1e293b;
  margin-left: 15px;
  margin-top: 15px;
`
export const UlGamingContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const GamingFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`
export const GamingFailureImg = styled.img`
  width: 280px;
  height: 250px;
  margin-top: 50px;
`
export const GamingFailureHeading1 = styled.h1`
  font-family: 'roboto';
  font-weight: 'bold';
  color: black;
  font-size: 25px;
  text-align: center;
  margin-left: ${props => (props.value1 ? '0' : '50')}px;
`
export const GamingFailP1 = styled.p`
  font-family: 'roboto';
  color: 'black';
  margin-top: 0px;
  margin-bottom: 0px;
  width: 400px;
  text-align: center;
  margin-left: ${props => (props.value1 ? '0' : '50')}px;
`
export const GamingFailButton = styled.button`
  font-family: 'roboto';
  width: 80px;
  color: #ffffff;
  margin-left: ${props => (props.value1 ? '0' : '50')}px;
  margin-top: 20px;
  height: 30px;
  background-color: #4f46e5;
  border-radius: 5px;
  border-width: 0px;
`
