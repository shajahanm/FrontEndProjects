import { useState } from 'react';
import './App.css'
import CustomTextInput from './components/customTextInput/CustomTextInput'
import { CustomDropdown } from './components/customDropdown/CustomDropdown';

function App() {
  const [selected, setSelected] = useState<{ label: string; value: string } | undefined>();
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
    </>
  )
}

export default App
