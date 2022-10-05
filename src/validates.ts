export const V1 = 'Some validate provided value example'
export const V2 = 'Some validate expected value example'

export const RESULT = (v1: any = V1, v2: any = V2) => ({
	status: false,
	result: typeof v1 === typeof v2,
	values: { v1, v2 },
	desc: 'Equal types of values',
	error: new Error('Types are not equal'),
})

export const getResults = (result: any, desc: string, values: any) => {
	const status = !!result
	const error = status ? null : new Error(desc)
	return { status, result, desc, error, values }
}

export const validateEqual = (v1: any, v2: any) => {
	const result = v1 === v2
	return getResults(result, 'Equality of values', { v1, v2 })
}

export const validateTypes = (v1: any, v2: any) => {
	const result = typeof v1 === typeof v2
	return getResults(result, 'Equality of value types', { v1, v2 })
}

export const validateProps = (v1: any, v2: any) => {
	const props1 = Object.getOwnPropertyNames(v1)
	const props2 = Object.getOwnPropertyNames(v2)
	const result = props2.every(prop => props1.includes(prop))
	return getResults(result, 'value have all of props from value2', { v1, v2, props1, props2 })
}
