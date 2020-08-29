import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '_styles';

const Container = styled.TouchableOpacity`
  background-color: ${Colors.PRIMARY};
  padding: 10px;
  border-radius: 5px;
`;

const Label = styled.Text`
  color: ${Colors.WHITE};
`;

interface ButtonProps {
  onPress: () => void;
  disabled?: boolean;
  label: string;
}

const Button: React.FC<ButtonProps> = ({onPress, disabled, label}) => {
  return (
    <Container disabled={disabled} onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
