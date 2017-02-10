import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@kadira/storybook';
import Input from '../Input';
import Button from '../Button';
import InputGroup from '../InputGroup';

const Wrapper = styled.div`

  > * {
    margin-bottom: 15px;
  }
`;

storiesOf('InputGroup', module)
  .addWithInfo(
    'API',
    '',
    () =>
      <Wrapper>
        <InputGroup>
          <Button>Button 1</Button>
          <Button kind="default">Button 2</Button>
        </InputGroup>

        <InputGroup>
          <Button block>Button 1</Button>
          <Button kind="default" block>Button 2</Button>
        </InputGroup>

        <InputGroup>
          <Button>Button 1</Button>
          <Button kind="default">Button 2</Button>
          <Button kind="warning">Button 3</Button>
        </InputGroup>

        <InputGroup>
          <Button>Button 1</Button>
          <Button kind="default" block>Button 2</Button>
          <Button kind="warning">Button 3</Button>
        </InputGroup>

        <InputGroup>
          <Button>大於</Button>
          <Input placeholder="預設值：20" />
        </InputGroup>

        <InputGroup>
          <Input placeholder="Input 1" />
          <Button>Button 1</Button>
        </InputGroup>

        <InputGroup>
          <Button>Button 1</Button>
          <Input placeholder="Input 1" />
          <Button>Button 2</Button>
        </InputGroup>

        <InputGroup>
          <Button>之間</Button>
          <Input placeholder="預設值：0" />
          <Button>和</Button>
          <Input placeholder="預設值：100" />
        </InputGroup>

      </Wrapper>,
    { inline: true },
  );