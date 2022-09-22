import { createContext } from 'react';
import { useProduct } from '../hooks';
import { GenericComponentsProps, OnChangeArgs, Product, ProductContextProps } from '../models';
import styles from '../styles/styles.module.css';


export interface Props extends GenericComponentsProps {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?:number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });
  
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  )
}
