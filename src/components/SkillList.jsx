import SkillListItem from "./SkillListItem";
import "./SkillList.css"

const SkillList = ({skills}) => {

const skillListLi = skills.map((eachSkill, index) => <li className="SkillListLi" key={index}>{eachSkill.name}<button className="SkillListLevelBtn" >LEVEL {eachSkill.level}</button></li>)
    return (
        <ul className="SkillListUl" >
            {skillListLi}
        </ul>
    )
}

export default SkillList;