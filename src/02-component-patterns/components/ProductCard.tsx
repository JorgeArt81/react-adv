import { createContext, CSSProperties, ReactNode } from 'react';
import { useProduct } from '../hooks';
import { Product, ProductContextProps } from '../models';
import styles from '../styles/styles.module.css';
import { GenericComponentsProps } from '../models';


export interface Props extends GenericComponentsProps {
  product: Product;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  )
}
