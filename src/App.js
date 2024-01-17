import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output,setOutput] = useState("")

  useEffect(() => {
  }, [input]);

  function handleClick(e) {
    const value = e.currentTarget.value;
    const newValue = validator(value,input)
    setInput(newValue)
    setOutput(newValue)
  }
  function clear()
  {
      setInput("")
      setOutput("")
  }

    function deleteHandle() {
        let aux = "";
        for (let i = 0; i < input.length - 1; i++) { // Corrección aquí
            aux += input[i];
        }
        setInput(aux);
        setOutput(aux);
    }
    function equalHandle()
    {
        console.log("input calculado: " + input)
        const resultado = calcularExpresionMatematica(input)
        setOutput(resultado)

    }
    function calcularExpresionMatematica(cadena) {
        try {
            // Utilizamos la función eval para evaluar la expresión
            // Esto puede ser peligroso si la cadena proviene de fuentes no confiables
            // Asegúrate de validar o limpiar la entrada antes de usar eval en un entorno real
            const resultado = eval(cadena);

            if(resultado == "Infinity")
                return "No se puede dividr entre 0"
            // Verificamos si el resultado es un número válido
            if (typeof resultado === 'number' && !isNaN(resultado)) {
                return resultado;
            } else {
                return 'Error de sintaxis'
            }
        } catch (error) {
            return 'Eror de sintaxis';
        }
    }





    function EqualButton() {
    return <button id="equals" onClick={equalHandle}>=</button>;
  }

  function Display() {
    return <div id="display">
        <p id={"display-input"}>{input}</p>
        <p id={"display-output"} style={{"color":"#549159"}}>{output}</p>
    </div>;
  }

  function NumbersButtons() {
    const idButtons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
    const names = ["seven", "eight", "nine", "four", "five", "six", "one", "two", "three", "zero", "decimal"];


    return (
        <div className="numbers-wrapper">
          {idButtons.map((key, index) => (
              <button
                  key={index}
                  id={names[index]}
                  onClick={handleClick}
                  value={key}
                  className={key === "0" ? "button-zero" : "button-number"}
              >
                  {key}
              </button>

          ))}
        </div>
    );
  }
    function DivideButton()
    {
        return <button id={"divide"} onClick={handleClick} value="/">/</button>
    }
    function MultiplyButton()
    {
        return <button id={"multiply"} onClick={handleClick} value="*">*</button>
    }
    function SubtractButton()
    {
        return <button id={"subtract"} onClick={handleClick} value="-">-</button>
    }
    function AddButton()
    {
        return <button id={"add"} onClick={handleClick} value="+">+</button>
    }
    function ClearButton()
    {
        return <button id={"clear"} onClick={clear} style={{"color":"red"}}>AC</button>

    }
    function DeleteButton()
    {
        return <button id={"delete"} onClick={deleteHandle} style={{"color":"red"}}> Borrar </button>

    }
    function validator(value,input)
    {
        let operationCount = 0
        let lastElement = input[input.length-1]
        let numOfDots = input.split('').filter(caracter => caracter === '.').length;
        let numOfOperators = input.split('').filter(caracter => (caracter === '*' || caracter === '+' || caracter === '-' ||caracter === '/')).length;
        console.log("nmumero de puntos: " + numOfDots)
        console.log("numero de operadores " + numOfOperators)


        if(value === "*" || value === "/" || value === "+" || value === ".")
        {
            if(value === lastElement)
                return input

            if(value === ".")
            {
                //xd , para que se salte esta validacion y no cambie el anterior operador por punto
            }
            else if(lastElement  === "*" || lastElement  === "/" || lastElement === "+")
            {
                let aux = ""
                for(let i = 0;i < input.length-1; i++)
                {
                    aux += input[i]
                }
                return aux + value;
            }

        }

        if(value === "." )
            if(numOfOperators < numOfDots)
                return input

        return input + value
    }






    return (
      <div id={"App"}>
        <h1 id={"title"}>Calculator</h1>
        <Display />
          <ClearButton  />
          <DeleteButton />
        <NumbersButtons />
  <div className={"operators-wrapper"}>
      <DivideButton />
      <MultiplyButton />
      <SubtractButton />
      <AddButton />

  </div>
          <EqualButton />

          <p className={"firma"}>by <i>lucioggm</i></p>

      </div>
  );
}

export default App;
