import { useState } from 'react'
import './App.css'

function App() {
  const [calculatorOutput, setCalculatorOutput] = useState<number | string | null>(null)
  const [firstNumber, setFirstNumber] = useState<number | string | null>();
  const [secondNumber, setSecondNumber] = useState<number | string | null>();
  const [selectedOperator, setSelectedOperator] = useState("");
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  const calcOperators = ['+'];

  const handleNewClick = (keyValue: string | number) => {
    if (typeof keyValue === 'number' || keyValue === '.'){     
      if (operator === null) {
        setFirstNumber(`${firstNumber}${keyValue}`);
      } else {
        setSecondNumber(`${secondNumber}${keyValue}`)
      }
    }
    if (['+','-','*','/'].includes(keyValue)) {

    }
    if (keyValue === '=' && firstNumber !== null && secondNumber !== null) {
      switch (selectedOperator) {
        case "+":
          setCalculatorOutput(Number(firstNumber) + Number(secondNumber))
          break;
        case "-":
          setCalculatorOutput(Number(firstNumber) - Number(secondNumber))
          break;
        default:
          break;
      }
      setFirstNumber(calculatorOutput);
      setSelectedOperator("");
    }

    

    setCalculatorOutput(`${calculatorOutput}${keyValue}`);
  }

  return (
    <>      
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <div className="calculator__output">{calculatorOutput}</div>
        <div className="calculator__keys">
          <button className="calculator__key calculator__key--operator" onClick={() => handleNewClick("+")}>+</button>
          <button className="calculator__key calculator__key--operator" onClick={() => handleNewClick("-")}>-</button>
          <button className="calculator__key calculator__key--operator" onClick={() => handleNewClick("*")}>&times;</button>
          <button className="calculator__key calculator__key--operator" onClick={() => handleNewClick("/")}>÷</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick(7)}>7</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick(9)}>9</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick(8)}>8</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick(4)}>4</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick(5)}>5</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick(6)}>6</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick(1)}>1</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick(2)}>2</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick(3)}>3</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick(0)}>0</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick(".")}>.</button>
          <button className="calculator__key calculator__key_number" onClick={() => handleNewClick("AC")}>AC</button>
          <button className="calculator__key calculator__key--enter" onClick={() => handleNewClick("=")}>=</button>
        </div>
      </div>
    </>
  )
}

export default App
