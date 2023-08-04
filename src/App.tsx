import { useState } from 'react'
import './App.css'

function App() {
  const [calculatorOutput, setCalculatorOutput] = useState('0')
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [calculatorIsShowingFinalResult, setCalculatorIsShowingFinalResul] = useState(false);
  //const [secondNumber, setSecondNumber] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  // const [firstNumberHasDot, setFirstNumberHasDot] = useState(false);
  // const [secondNumberHasDot, setSecondNumberHasDot] = useState(false);
  // const [calcResult, setCalcResult] = useState<number | null>(null);
  //const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  //const calcOperators = ['+'];

  const handleNumberClick = (clickedNumberValue: string) => {

    
    // if (selectedOperator === null) {
    //   if (firstNumber === null && clickedNumberValue === 0) return false;      
    //   setFirstNumber(Number(`${Number(firstNumber)}${Number(clickedNumberValue)}`));
    // } else {
    //   if (secondNumber === null && clickedNumberValue === 0) return false;
    //   setSecondNumber(Number(`${Number(secondNumber)}${Number(clickedNumberValue)}`));
    // }
    if (calculatorOutput === '0' || calculatorIsShowingFinalResult) {
      setCalculatorOutput(clickedNumberValue);
      setCalculatorIsShowingFinalResul(false);
    } else {
      setCalculatorOutput(calculatorOutput + clickedNumberValue);
    }
    setCurrentNumber(currentNumber + clickedNumberValue);
    //setCalculatorOutput(`${firstNumber}${selectedOperator}${secondNumber}`)    
  }

  const handleOperatorClick = (operatorValue: string) => {
    if (selectedOperator === '' && currentNumber !== '') {
      setSelectedOperator(operatorValue);
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setCalculatorOutput(`${calculatorOutput}${operatorValue}`);
    }
  }

  const handleDotClick = () => {
    if (currentNumber !== '' && !currentNumber.includes('.')) {
      setCurrentNumber(currentNumber + '.');
      setCalculatorOutput(`${calculatorOutput}.`);
    }
  }

  const handleEnterClick = () => {    
    if (firstNumber !== '' && currentNumber !== '') {
      let result = 0;
      console.log(`${firstNumber} ${selectedOperator} ${currentNumber}`)
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
          setCalculatorOutput('ERROR');
          break;
      }
      setCalculatorOutput(result.toString());          
      setCalculatorIsShowingFinalResul(true);
      setFirstNumber('');
      setCurrentNumber('');
      setSelectedOperator('');
    }
  }

  const handleClearCalculator = () => {
    setCalculatorIsShowingFinalResul(false);
    setCalculatorOutput('0');    
    setSelectedOperator('');
    setFirstNumber('');
    setCurrentNumber('');
  }

  return (
    <>      
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <div className="calculator__output">{calculatorOutput}</div>
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
