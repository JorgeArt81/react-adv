import { useState, useEffect, useRef } from 'react';
import { OnChangeArgs, Product } from '../models';

interface UseProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}
export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs) => {
    const [counter, setCounter] = useState(value);

    useEffect(() => {
        setCounter(value);
    }, [value])


    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    }

    return {
        counter,
        increaseBy
    }
}
