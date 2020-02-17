import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 5rem;
  line-height: 1rem;
  font-size: 1rem;
`

const handleChange = (event) => {
  this.state = {
    ...this.state,
    [event.target.name]: [event.target.value]
  }
}

const Form = () => {
  return (
    <Input 
      type='text'
      name='user'
      placeholder='Enter a user to search...'
      onChange={handleChange}
    />
  );
}

export default Form;
