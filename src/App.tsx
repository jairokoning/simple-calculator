import { useState } from 'react'
import './App.css'

function App() {
  const [calculatorOutput, setCalculatorOutput] = useState('0')
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [calculatorIsShowingFinalResult, setCalculatorIsShowingFinalResul] = useState(false);  
  const [selectedOperator, setSelectedOperator] = useState('');
  const [calculatorOutputFontSizeClass, setCalculatorOutputFontSizeClass] = useState('calculator__output__font-size__xl')
  
  const handleNumberClick = (clickedNumberValue: string) => {    
    if (currentNumber.length >=27) {
      setCalculatorOutput('ERROR: VERY LONG NUMBER');
      setCalculatorIsShowingFinalResul(true);      
      setCurrentNumber('')
      handleOutputFontSize(23);
      return false;
    }
    if (calculatorOutput === '0' || calculatorIsShowingFinalResult) {
      setCalculatorOutput(clickedNumberValue);
      handleOutputFontSize(1);
      setCalculatorIsShowingFinalResul(false);
    } else {
      setCalculatorOutput((currentState) => {
        const newState = currentState + clickedNumberValue
        handleOutputFontSize(newState.length);
        return newState;        
      });      
    }
    setCurrentNumber(currentNumber + clickedNumberValue);    
  }

  const handleOperatorClick = (operatorValue: string) => {
    if (selectedOperator === '' && currentNumber !== '') {
      setSelectedOperator(operatorValue);
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setCalculatorOutput((currentState) => {
        const newState = currentState + operatorValue;
        handleOutputFontSize(newState.length);
        return newState;        
      });
    }
  }

  const handleDotClick = () => {
    if (!currentNumber.includes('.')) {
      setCurrentNumber(currentNumber + '.');
      setCalculatorOutput((currentState) => {
        const newState = currentState + '.';
        handleOutputFontSize(newState.length);
        return newState;        
      });
    }
  }

  const handleEnterClick = () => {    
    if (firstNumber !== '' && currentNumber !== '') {
      let result = 0;
      let isError = false;     
      switch (selectedOperator) {
        case "+":
          result = Number(firstNumber) + Number(currentNumber);                    
          break;
        case "-":
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case "x":
          result = Number(firstNumber) * Number(currentNumber);
          break;
        case "÷":
          result = Number(firstNumber) / Number(currentNumber);
          break;
        default:
          isError = true;
          break;
      }
               
      setCalculatorIsShowingFinalResul(true);
      setFirstNumber('');
      setCurrentNumber('');
      setSelectedOperator('');
      if (isError) {
        setCalculatorOutput('ERROR: UNDEFINED OPERATOR');
        handleOutputFontSize(25);
      } else {
        setCalculatorOutput(result.toString()); 
        handleOutputFontSize(result.toString().length);
      }
    }
  }

  const handleClearCalculator = () => {
    setCalculatorIsShowingFinalResul(false);
    setCalculatorOutput('0');    
    setSelectedOperator('');
    setFirstNumber('');
    setCurrentNumber('');
    handleOutputFontSize(0);
  }

  const handleOutputFontSize = (outputLength: number) => {
    if (outputLength < 7 && calculatorOutputFontSizeClass !== 'calculator__output__font-size__xl') {
      setCalculatorOutputFontSizeClass('calculator__output__font-size__xl')
    }
    if (outputLength > 7 && outputLength < 9 && calculatorOutputFontSizeClass !== 'calculator__output__font-size__lg') {
      setCalculatorOutputFontSizeClass('calculator__output__font-size__lg')
    }
    if (outputLength > 9 && outputLength < 13 && calculatorOutputFontSizeClass !== 'calculator__output__font-size__md') {
      setCalculatorOutputFontSizeClass('calculator__output__font-size__md')
    }
    if (outputLength > 13 && calculatorOutputFontSizeClass !== 'calculator__output__font-size__sm') {      
      setCalculatorOutputFontSizeClass('calculator__output__font-size__sm')
    }
  }

  return (
    <>      
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <div className={"calculator__output " + calculatorOutputFontSizeClass}>{calculatorOutput}</div>
        <div className="calculator__keys">
          <button className="calculator__key calculator__key--operator" onClick={() => handleOperatorClick("+")}>+</button>
          <button className="calculator__key calculator__key--operator" onClick={() => handleOperatorClick("-")}>-</button>
          <button className="calculator__key calculator__key--operator" onClick={() => handleOperatorClick("x")}>&times;</button>
          <button className="calculator__key calculator__key--operator" onClick={() => handleOperatorClick("÷")}>÷</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNumberClick('7')}>7</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNumberClick('8')}>8</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNumberClick('9')}>9</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNumberClick('4')}>4</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNumberClick('5')}>5</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNumberClick('6')}>6</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNumberClick('1')}>1</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNumberClick('2')}>2</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNumberClick('3')}>3</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNumberClick('0')}>0</button>
          <button className="calculator__key calculator__key_number" onClick={handleDotClick}>.</button>
          <button className="calculator__key calculator__key_number" onClick={handleClearCalculator}>AC</button>
          <button className="calculator__key calculator__key--enter" onClick={handleEnterClick}>=</button>
        </div>
      </div>
    </>
  )
}

export default App
