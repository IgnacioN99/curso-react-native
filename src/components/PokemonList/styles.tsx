import styled from 'styled-components/native';

const StyledView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100%;
`;

const StyledText = styled.Text`
  font-size: 20px;
  color: black;
`;

const StyledSpinner = styled.ActivityIndicator`
  margin-top: 20px;
  margin-bottom: 60px;
`;

export {StyledView, StyledText, StyledSpinner};
