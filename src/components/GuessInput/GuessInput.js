import React from "react";

function GuessInput({gameStatus, handleSubmitGuess}) {
  const [tentativeGuess, tentativeSetGuess] = React.useState('');

  function handleSubmit(evt){
    evt.preventDefault();
    if(tentativeGuess.length !== 5){
      window.alert('Please enter exactly five characters')
      return
    }
    handleSubmitGuess(tentativeGuess);
    tentativeSetGuess('');
  }

  return (<form onSubmit={handleSubmit} className="guess-input-wrapper">
  <label htmlFor="guess-input">Enter guess:</label>
  <input 
    value={tentativeGuess} 
    disabled={gameStatus!=='running'}
    required
    minLength={5}
    maxLength={5}
    onChange={(evt) => {
      tentativeSetGuess(evt.target.value.toUpperCase())
    }} 
    id="guess-input" 
    type="text" />
</form>
  );
}

export default GuessInput;
