import styled from 'styled-components'

export const GamingItemList = styled.li`
  list-style-type: none;
  height: 400px;
  width: 270px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-right: 50px;
`
export const GamingItemImg = styled.img`
  width: 100%;
  height: 360px;
  margin-bottom: 13px;
`
export const GamingItemP1 = styled.p`
  color: ${props => (props.value ? 'black' : '#616e7c')};
  margin-top: ${props => (props.value ? '0' : '-10')}px;
  font-family: 'roboto';
  font-weight: ${props => props.value && 'bold'};
`
