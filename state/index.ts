import create from 'zustand'

export const useStore = create(set => ({
	isCalculated: false,
	toggleCalculated: () => set(state => ({ isCalculated: !state.isCalculated})),
	income: 0, 
	setIncome: (income: number) => set(state => state.income = income)
}))
