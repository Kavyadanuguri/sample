import styled from 'styled-components'

export const VideoDisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`
export const VideoMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  background-color: #f4f4f4;
  min-height: 90vh;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 30px;
`
export const VideoPlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`
export const VideoP1 = styled.p`
  font-family: 'roboto';
  color: ${props => (props.value ? '#64748b' : 'black')};
  margin-top: ${props => (props.value ? '3' : '0')}px;
  margin-left: ${props => (props.value1 ? '7' : '0')}px;
`
export const VideoP11 = styled.p`
  font-family: 'roboto';
  color: ${props => (props.colorValue ? '#00306e' : '#64748b')};
  margin-top: 3px;
  font-weight: ${props => props.colorValue && 'bold'};
  margin-left: 7px;
`
export const VideoContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${props => (props.value ? 'flex-start' : 'space-between')};
`
export const VideoCon1 = styled.div`
  display: flex;
  flex-direction: row;
  width: ${props => (props.kavya ? '300' : '100')}px;
  justify-content: ${props => props.kavya && 'space-between'};
`

export const PlusButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-top: -10px;
  margin-right: -5px;
`
export const VideoHrLine = styled.hr`
  width: 100%;
  background-color: #64748b;
  margin-bottom: 20px;
`
export const VideoImg1 = styled.img`
  width: 40px;
  height: 60px;
  margin-right: 20px;
`
export const VideoFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 70vw;
`
export const VideoFailureImg = styled.img`
  width: 390px;
  height: 320px;
  margin-top: 50px;
`
export const VideoFailureHeading1 = styled.h1`
  font-family: 'roboto';
  font-weight: 'bold';
  color: black;
  font-size: 25px;
  text-align: center;
  margin-left: ${props => (props.value1 ? '0' : '50')}px;
`
export const VideoFailP1 = styled.p`
  font-family: 'roboto';
  color: 'black';
  margin-top: 0px;
  margin-bottom: 0px;
  width: 400px;
  text-align: center;
  margin-left: ${props => (props.value1 ? '0' : '50')}px;
`
export const VideoFailButton = styled.button`
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
