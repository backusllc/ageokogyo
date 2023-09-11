import { navigate } from 'gatsby';
import React from 'react';

const ContactButtons = () => {

    const addNotification = (event: any) => {
        navigate('/contact')
    };

    return (
        <div className="columns">
            <div style={{ border: "1px solid #E35700" }}>
                <button
                    className="button is-medium is-fullwidth"
                    onClick={addNotification}
                    style={{
                        backgroundColor: "#fff",
                        color: '#E35700',
                        border: "none",
                        padding: "1rem",
                        // color: "white",
                        width: "100%",
                    }}
                >
                    お問い合わせする
                </button>
            </div>
        </div >
    );
};

export default ContactButtons;
