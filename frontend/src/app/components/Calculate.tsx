import { useState, useEffect, SetStateAction } from "react";
import { evaluate } from 'mathjs';

export default function Calculate() {
	const [calculation, setCalculation] = useState('0 + 0');
	const [userInput, setUserInput] = useState('');
	const [resultMessage, setResultMessage] = useState('');
	const [attemptedCheck, setAttemptedCheck] = useState(false);

	useEffect(() => {
		setCalculation(generateCalculation());
	}, []);

	function generateCalculation() {
		const firstNumber = Math.floor(Math.random() * 10);
		const secondNumber = Math.floor(Math.random() * 10);
		return `${firstNumber} + ${secondNumber}`;
	}

	function handleInputChange(event: { target: { value: SetStateAction<string>; }; }) {
		setUserInput(event.target.value);
		setAttemptedCheck(false);
	}

	function checkAnswer() {
		try {
			const correctAnswer = evaluate(calculation);
			const userAnswer = parseInt(userInput, 10);

			if (!isNaN(userAnswer) || userInput.trim() !== '') {
				setAttemptedCheck(true);
			}

			if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
				setResultMessage('Correto! Muito bem!');
				setCalculation(generateCalculation());
				setUserInput('');
			} else {
				setResultMessage('Incorreto. Tente novamente.');
			}
		} catch (error) {
			setResultMessage('Entrada inválida. Digite um número válido.');
		}
	}

	return (
		<>
			<label htmlFor="verification" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white mt-3">
				{calculation} = ? <span className="cursor-pointer" onClick={checkAnswer}>Verificar</span> 
				<span className={`text-white px-2 mt-2 ${resultMessage.includes('Correto') ? 'text-green-500' : 'text-red-500'}`}>
					{attemptedCheck ? resultMessage : ''}
				</span>
			</label>

			<input
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				type="number" value={userInput} onChange={(e) => handleInputChange(e)} name="verification" id="verification" required
			/>
		</>
	);
};