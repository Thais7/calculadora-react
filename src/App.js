import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './style';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleOperation = (op) => {
    if (currentNumber === '0') return;
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation(op);
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      let result = 0;

      switch (operation) {
        case '+':
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case '-':
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case '*':
          result = Number(firstNumber) * Number(currentNumber);
          break;
        case '/':
          result = Number(currentNumber) === 0
            ? 'Erro'
            : Number(firstNumber) / Number(currentNumber);
          break;
        default:
          return;
      }

      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleOperation('*')} />
          <Button label="/" onClick={() => handleOperation('/')} />
          <Button label="C" onClick={handleClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
