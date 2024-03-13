import logo from './logo.svg';
import './App.css';
import SkillList from './components/SkillList';
import NewSkillForm from './components/NewSkillForm';
import { useState } from 'react';


function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])

  const addSkills = (skill) => {
    setSkills([...skills, skill])
  }

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <NewSkillForm addSkills={addSkills} />
    </div>
  );
}

export default App;
