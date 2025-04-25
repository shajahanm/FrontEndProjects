import React, { useState, useRef, useEffect } from 'react';

type Option = {
    label: string;
    value: string | number;
};

type CustomDropdownProps = {
    options: Option[];
    onSelect: (value: Option) => void;
    placeholder?: string;
    selected?: Option;
};

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
    options,
    onSelect,
    placeholder = 'Select an option',
    selected,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (option: Option) => {
        onSelect(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} style={{ position: 'relative', width: '200px' }}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                }}
            >
                {selected ? selected.label : placeholder}
            </div>

            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        backgroundColor: '#fff',
                        maxHeight: '200px',
                        overflowY: 'auto',
                        zIndex: 1000,
                    }}
                >
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            style={{
                                padding: '10px',
                                cursor: 'pointer',
                                backgroundColor: selected?.value === option.value ? '#f0f0f0' : 'transparent',
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
