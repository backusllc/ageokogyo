import React from 'react'; /* eslint-disable */

const VariantSelector = ({ key, onChange, options }) => {
    return (
        <div style={{ display: "flex",alignItems:"center" }}>
            <label className="label" style={{ width: "50px" }}>{options.name} </label>

            <div className="control">
                <div className="select is-fullwidth">
                    <select onChange={onChange} name={(options.name)} key={options.id}
                        style={{
                            height: "46px",
                            width: "120px",
                            padding: "10px",
                            backgroundColor: "white",
                            border: "1px solid #999999",
                        }}
                    >
                        {
                            options.values.map(value => (
                                <option
                                    key={`${options.name}-${value}`}
                                    value={value}
                                    className="is-medium"
                                >
                                    {`${value}`}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export default VariantSelector;
