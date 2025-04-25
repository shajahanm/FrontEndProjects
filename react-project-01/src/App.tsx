import { useState } from 'react';
import './App.css'
import CustomTextInput from './components/customTextInput/CustomTextInput'
import { CustomDropdown } from './components/customDropdown/CustomDropdown';
import { CustomModal } from './components/customModal/CustomModal';

function App() {
  const [selected, setSelected] = useState<{ label: string; value: string } | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ];

  return (
    <>
      <div>
        <p>Text Input</p>
        <CustomTextInput label='User name' />
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>Dropdown</p>
        <CustomDropdown
          options={options}
          onSelect={(option: any) => setSelected(option)}
          selected={selected}
          placeholder="Pick a fruit"
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>Modal</p>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <CustomModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <p>This modal uses React Portal!</p>
        </CustomModal>
      </div>
    </>
  )
}

export default App
