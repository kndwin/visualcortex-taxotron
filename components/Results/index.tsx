import styles from './index.module.scss'
import Form from '../Blocks/Form'
import Card from '../Blocks/Card'
import { useStore } from 'state'

export default function Results () {
	const income = parseInt(useStore(state => state.income))
	function getTaxBreakdown (income: number) {
		let taxBreakdown = [
			{range: '$0 - $18,200', breakdown: 0},
			{range: '$18,201 - $45,000', breakdown: 0},
			{range: '$45,001 - $120,000', breakdown: 0},
			{range: '$120,001 - $180,000', breakdown: 0},
			{range: '$180,000+', breakdown: 0},
		]

		taxBreakdown[0].breakdown = income
		const brackets = [18200, 45000, 120000, 180000]
		for (let i=0; i < brackets.length - 1; i++) {
			if (income > brackets[i]) {
				taxBreakdown[i].breakdown = brackets[i]
				taxBreakdown[i+1].breakdown = income - brackets[i]

			}
		}
		return taxBreakdown
	}
	const taxBreakdown = getTaxBreakdown(income)

	return (
		<div className={styles.container}>
			<Form />
			<Card>
				<p className={styles.title}>
					Your estimated taxable income is 
				</p>
				<span className={`${styles.box} 
					${styles.center}
					${styles.income}
				`}>
					$ {income.toLocaleString()}
				</span>
				<p className={styles.title}>
					Breakdown
				</p>
				{taxBreakdown.map(brackets => (
					<div className={styles.box}>
						<div className={styles.bracket}>
							<span className={styles.bracketTitle}>
								Tax Bracket
							</span>
							<span>
								{brackets.range}
							</span>
						</div>
						<span className={styles.breakdown}>
							{brackets.breakdown.toLocaleString()}
						</span>
					</div>
				))}
			</Card>
		</div>
	)
}
