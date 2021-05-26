import {useStore} from 'state'
import styles from './Card.module.scss'

export default function Card ({
	children,
} : {
	children: React.ReactChildren
}) {
	const isCalculated = useStore(state => state.isCalculated)

	return (
		<div className={`${styles.background} 
			${ isCalculated ? styles.moveCard : styles.landing }`}>
			{children}
			<div className={styles.bigCircle} />
			{!isCalculated && 
				<div className={styles.circle} />
			}
		</div>
	)
}
