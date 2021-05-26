import {useState} from 'react'
import {useStore} from 'state'
import styles from './Form.module.scss'
export default function Form () {

	const isCalculated = useStore(state => state.isCalculated)
	const toggleCalculated = useStore(state => state.toggleCalculated)
	const updateIncome = useStore(state => state.setIncome)
	const updatedIncome = useStore(state => state.income)
	const [income, setIncome] = useState(0)
	const [formIsValid, setFormIsValid] = useState(false)
	const [error, setError] = useState('Field marked with * are mandatory')

	function onSubmit (e) {
		if (formIsValid) {
			toggleCalculated()
			updateIncome(income)
		} else {
			validateInput(e)
		}	
	}

	function validateInput (e) {
		e.preventDefault
		const input = e.target.value
		if (input > 0) {
			setIncome(parseInt(input))
			setFormIsValid(true)
		} else {
			setError("Please enter an amount higher than 0")
		}
	}


	return (
		<>
			{!isCalculated ? (
				<form className={styles.form}>
					<h1>
						Calculate your tax
					</h1>
					<div className={styles.warning}>
						<span id={styles.warningIcon}> 
							i
						</span>
						{error}
					</div>
					<label>
						Select your country of residence * 
					</label>
					<div className={styles.dropdown}>
						<select>
							<option value="Australia">Australia</option>
							<option value="Australia">US</option>
						</select>
					</div>
					<label>
						Select an income year *
					</label>
					<div className={styles.dropdown}>
						<select>
							<option value="2021">2020-2021</option>
							<option value="2020">2019-2020</option>
						</select>
					</div>
					<label>
						Enter your total taxable income for the income year *
					</label>
					<div className={styles.income}>
						<input min={0} type="number" 
							onChange={validateInput}
							placeholder='Amount' />
					</div>
					<button onClick={onSubmit}>
						Calculate
					</button>
				</form>
			) : (
			<form className={styles.form}>
				<h1>
					Your tax results
				</h1>
				<label>
					Select your country of residence * 
				</label>
				<div className={styles.dropdown}>
					<select disabled>
						<option selected value="Australia">Australia</option>
						<option value="Australia">US</option>
					</select>
				</div>
				<label>
					Select an income year *
				</label>
				<div className={styles.dropdown}>
					<select disabled>
						<option value="2021">2021</option>
						<option value="2020">2020</option>
					</select>
				</div>
				<label>
					Enter your total taxable income for the income year *
				</label>
				<div className={styles.income}>
					<input min={0} value={updatedIncome} disabled 
						type="number" placeholder='Amount' 
					/>
				</div>
				<a onClick={toggleCalculated}>
					Go back to previous screen
				</a>
			</form>
			)}
		</>
	)
}
