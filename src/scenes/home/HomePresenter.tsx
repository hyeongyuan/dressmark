import React from 'react';
import styled from 'styled-components/native';
import Button from '_atoms/button';
import {Typography} from '_styles';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: ${Typography.FONT_SIZE_16}px;
  margin-bottom: 20px;
`;

const HomePresenter = () => {
  const onPressButton = () => {
    console.log('촬영');
  };
  return (
    <Container>
      <Title>당신의 옷장을 채워보세요.</Title>
      <Button onPress={onPressButton} label="촬영" />
    </Container>
  );
};

export default HomePresenter;
