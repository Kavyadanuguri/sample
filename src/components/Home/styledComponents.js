import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 20px;
`

export const HomeContainer1 = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 30vh;
  padding-left: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
`

export const HomeImage1 = styled.img`
  width: 150px;
  height: 35px;
`
export const HomeParagraph1 = styled.p`
  font-family: 'roboto';
  margin-top: 20px;
  width: 320px;
  margin-bottom: 20px;
`
export const HomeBtn1 = styled.button`
  background-color: transparent;
  height: 30px;
  font-family: 'roboto';
  font-weight: bold;
`
export const HomeCloseBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-top: -140px;
`
export const HomeSearchContainer = styled.div`
  outline-style: solid;
  outline-width: 1px;
  outline-color: black;
  display: flex;
  width: 370px;
  height: 30px;
`
export const HomeContainer2 = styled.div`
  background-color: #f4f4f4;
  min-height: 60vh;
  padding-left: 30px;
  padding-top: 20px;
`
export const HomeInputElement = styled.input`
  width: 310px;
  border-width: 0px;
  height: 100%;
`
export const SearchIconButton = styled.button`
  background-color: #f4f4f4;
  width: 60px;
  height: 100%;
  border-color: black;
  border-width: 1px;
`
export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const HomeUnOrder = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const HomeFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`
export const HomeFailureImg = styled.img`
  width: 280px;
  height: 250px;
  margin-top: 50px;
`
export const HomeFailureHeading1 = styled.h1`
  font-family: 'roboto';
  font-weight: 'bold';
  color: black;
  font-size: 25px;
  text-align: center;
  margin-left: ${props => (props.value1 ? '0' : '50')}px;
`
export const HomeFailP1 = styled.p`
  font-family: 'roboto';
  color: 'black';
  margin-top: 0px;
  margin-bottom: 0px;
  width: 400px;
  text-align: center;
  margin-left: ${props => (props.value1 ? '0' : '50')}px;
`
export const HomeFailButton = styled.button`
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
