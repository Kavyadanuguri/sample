import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 5px;
`
export const HeaderImage1 = styled.img`
  width: 150px;
  height: 30px;
  margin-top: 10px;
`
export const HeaderContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 210px;
  margin-top: 10px;
`
export const HeaderButton = styled.button`
  background-color: transparent;
  border-color: #3b82f6;
  color: #3b82f6;
  font-family: 'roboto';
  border-radius: 3px;
  width: 100px;
  height: 30px;
`
export const HeaderButton1 = styled.button`
  background-color: ${props => (props.value ? 'transparent' : ' #3b82f6')};

  border-color: ${props => props.value && '#616e7c'};
  border-width: ${props => (props.value ? '1' : '0')}px;
  color: ${props => (props.value ? '#616e7c' : ' #ffffff')};
  font-family: 'roboto';
  border-radius: 3px;
  width: 90px;
  height: 30px;
`
export const HeaderContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeaderMoon = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-top: -12px;
`
