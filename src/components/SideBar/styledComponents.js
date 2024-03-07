import styled from 'styled-components'

export const SideMainContainer = styled.div`
  width: 20vw;
  height: 100vh;
  display: flex;
  padding-left: 30px;
  flex-direction: column;
  padding-top: 30px;
  justify-content: space-between;
`
export const SideColorContainer = styled.div`
  min-height: 100vh;
`

export const SideCon1 = styled.div`
  display: flex;
  flex-direction: row;
`
export const SideP1 = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  color: black;
  margin-top: 5px;
  margin-left: 30px;
  text-decoration: none;
`
export const SideHeading = styled.h1`
  font-family: 'roboto';
  font-size: ${props => (props.heading ? '18' : '20')}px;
  width: 250px;
  color: #1e293b;
`

export const SideFacebook = styled.img`
  width: 35px;
  margin-right: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`
