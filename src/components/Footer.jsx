import React from "react";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>&copy; 2023 by Wendel | All Rights Reserved.</p>

                <span className="animate scroll" style={{ "--i": 1 }}></span>
            </div>

            <div className="footer-iconTop">
                <a>
                    <i className="bx bx-up-arrow-alt"></i>
                </a>

                <span className="animate scroll" style={{ "--i": 4 }}></span>
            </div>
        </footer>
    );
};
