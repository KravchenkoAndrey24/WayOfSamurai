import React from 'react';
import styles from './FormsControls.module.css';
//@ts-ignore
const FormControl = ({ input, meta, child, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
			<div>
				{props.children}
			</div>
			{hasError && <span>{meta.error}</span>}

		</div>
	)
}


//@ts-ignore
export const Textarea = (props: any) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormControl {...props}>
			<textarea {...restProps} {...input} />
		</FormControl>
	)
}
//@ts-ignore
export const Input = (props: any) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormControl {...props}>
			<input {...restProps} {...input} />
		</FormControl>
	)
}