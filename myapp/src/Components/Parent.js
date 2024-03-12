import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Buttton from './Buttton';


function Parent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(55000);

  const IncrementSalary = useCallback(() => {
    // Corrected function name to camelCase
    setSalary(salary + 1000);
  }, [salary]); // Added salary as a dependency

  const IncrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]); // Added age as a dependency

  return (
    <div>
      <Title />
      <Buttton handleClick={IncrementAge}>Increment Age</Buttton>
      <Count text="age" Count={age} />
      <Count text="salary" Count={salary} />
      <Buttton handleClick={IncrementSalary}>Increment Salary</Buttton>
    </div>
  );
}

export default Parent;
