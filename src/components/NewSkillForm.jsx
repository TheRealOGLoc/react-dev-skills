import "./NewSkillForm.css"
import { useState } from "react"

const NewSkillForm = ({addSkills}) => {

    const defaultValue = {
        name:"",
        level:3
    }

    const [formState, setFormState] = useState({
        name:"",
        level:3
    })

    const addToSkills = (event) => {
        event.preventDefault();
        addSkills(formState)
        setFormState(defaultValue);
    }

    function handleChange(evt) {
        evt.preventDefault();
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <form className="NewSkillForm" onSubmit={addToSkills} >
            <div>
                <label>Skill</label>
                <input type="text" className="NewSkillFormInput" name="name" value={formState.name} onChange={handleChange} required/>
            </div>
            <div>
                <label>Level</label>
                <select className="NewSkillFormInput" name="level" value={formState.level} onChange={handleChange} >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <button className="NewSkillFormBtn" type="submit" >ADD SKILL</button>
        </form>
    )
}

export default NewSkillForm