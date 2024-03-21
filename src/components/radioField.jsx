import React from "react";

const RadioField = ({ options, name, onChange, value, label }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (<div>
        <label className="text">{label}</label>
        <div className="radios-div">
            {options.map((option) => (
                <div key={option.name + "_" + option.value} className="radioInput">
                    <input
                        type="radio"
                        name={name}
                        id={option.name + "_" + option.value}
                        checked={option.value === value}
                        value={option.value}
                        onChange={handleChange}
                    />
                    <label className="text" htmlFor="inlineRadio1">{option.name}</label>
                </div>
            ))}
        </div>
    </div>);
};

export default RadioField;
