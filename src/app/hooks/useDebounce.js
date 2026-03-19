import { useState, useCallback, useRef } from 'react'

export function useDebounce(initialValue, onChange, delay = 500) {
	const [localValue, setLocalValue] = useState(initialValue)
	const timer = useRef(null)

	const handleChange = useCallback((e) => {
		const value = e.target.value
		setLocalValue(value)
		clearTimeout(timer.current)
		timer.current = setTimeout(() => onChange(value), delay)
	}, [onChange, delay])

	return [localValue, handleChange]
}