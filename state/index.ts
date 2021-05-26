import create from 'zustand'

interface state {
	isCalculated: boolean
	toggleCalculated: () => void
	income: number
	setIncome: (income: number) => void
}
export const useStore = create<state>(set => ({
	isCalculated: false,
	toggleCalculated: () => set(state => ({ isCalculated: !state.isCalculated})),
	income: 0, 
	setIncome: (income) => set(state => ({ income: income}))
}))
