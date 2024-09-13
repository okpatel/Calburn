import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './components/Card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  border: none;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.p`
  font-size: 1.2em;
  color: #333;
`;

function App() {
  const [calories, setCalories] = useState('');

  const handleCalculateCalories = () => {
    // Placeholder for calorie calculation logic
    setCalories('Estimated calories: 500 kcal');
  };

  return (
    <Container>
      <Title>Calburn Dashboard</Title>

      <Card title="Upload Your Meal">
        <input type="file" accept="image/*" />
      </Card>

      <Card title="Track Your Calories">
        <Button onClick={handleCalculateCalories}>
          Calculate Calories
        </Button>
        {calories && <Result>{calories}</Result>}
      </Card>
    </Container>
  );
}

export default App;
