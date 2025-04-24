import React from 'react';
import styles from './TextInput.module.css';

interface CustomTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    containerStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    errorStyle?: React.CSSProperties;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    label,
    value,
    onChange,
    placeholder,
    type = 'text',
    error,
    containerStyle,
    inputStyle,
    labelStyle,
    errorStyle,
    ...rest
}) => {
    return (
        <div className={styles.inputContainer} style={{ ...containerStyle }}>
            {label && <label className={styles.label} style={{ ...labelStyle }}>{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
                style={inputStyle}
                {...rest}
            />
            {error && <span className={styles.error} style={{  ...errorStyle }}>{error}</span>}
        </div>
    );
};

export default CustomTextInput;
