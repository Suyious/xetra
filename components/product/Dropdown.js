const Dropdown = ({options,name}) => {
    return (
        <div className="Dropdown_body">
            <select className="Dropdown_select" name={name}>
                {options.map((option,i)=>(
                    <option className="Dropdown_option" value={option} key={i}>{option}</option>
                ))}
            </select>
            <style jsx>{`
                .Dropdown_body{
                    margin: 1em 0;
                    padding: 0.4em 1em;
                    border: 1.5px solid #CDCDCD;
                    display: inline-block;
                    border-radius: 5px;                  
                }
                .Dropdown_select{
                    background: #000;
                    color: #fff;
                    outline: none;
                    border: none;
                    font-size: 1.2em;
                    width: 5em;
                }
            `}</style>
        </div>
    )
}

export default Dropdown
