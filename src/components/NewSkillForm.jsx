import "./NewSkillForm.css"

const NewSkillForm = () => {
    return (
        <form className="NewSkillForm" >
            <div>
                <label>Skill</label>
                <input type="text" className="NewSkillFormInput" />
            </div>
            <div>
                <label>Level</label>
                <select className="NewSkillFormInput" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button className="NewSkillFormBtn" >ADD SKILL</button>
        </form>
    )
}

export default NewSkillForm