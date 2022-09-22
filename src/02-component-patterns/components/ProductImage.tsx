import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { GenericComponentsProps } from '../models';

export interface Props extends GenericComponentsProps {
    img?: string;
}
export const ProductImage = ({ img, className, style }: Props) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt='Product image' />
    )
}