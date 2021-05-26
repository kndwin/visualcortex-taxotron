import utils from 'styles/utils.module.scss'
import styles from './index.module.scss'

import Card from '../Blocks/Card'
import Form from '../Blocks/Form'

export default function Landing () {
	return (
		<div className={styles.container}>
			<Card>
				<h1 className={utils.title}>
					Tax-o-tron
				</h1>
				<p className={utils.description}>
					The free and simple online tax calculator
				</p>
			</Card>
			<Form />
		</div>
	)
}
