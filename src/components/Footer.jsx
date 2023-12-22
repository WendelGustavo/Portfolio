import React from "react";

export const Footer = () => {

        const scrollToTop = () => {
          // Rola suavemente até o topo da página
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        };
      

    return (
        <footer className="footer">
            <div className="footer-text">
                <p>&copy; 2023 by Wendel | All Rights Reserved.</p>

                <span className="animate scroll" style={{ "--i": 1 }}></span>
            </div>

            <div className="footer-iconTop">
            <a onClick={scrollToTop}>
                    <i className="bx bx-up-arrow-alt"></i>
                </a>

                <span className="animate scroll" style={{ "--i": 4 }}></span>
            </div>
        </footer>
    );
};
