import styled from 'styled-components'

export const HomeItemList = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-top: 30px;
  margin-right: 40px;
`
export const HomeItemImg1 = styled.img`
  width: 100%;
  height: 150px;
`
export const HomeItemContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 10px;
`
export const HomeItemImg2 = styled.img`
  width: 30px;
  height: 50px;
  margin-right: 10px;
`
export const HomeItemP1 = styled.p`
  color: ${props => (props.value ? 'black' : '#64748b')};
  font-size: 15px;
  margin-top: ${props => (props.value ? '0' : '10')}px;
  margin-bottom: 5px;
  font-family: 'roboto';
`
