import logo from './logo.svg';
import './App.css';
import SkillList from './components/SkillList';
import NewSkillForm from './components/NewSkillForm';

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <NewSkillForm/>
    </div>
  );
}

export default App;
