import React from "react";

function Footer(props) {
  return (
    <>

    <footer className="footer">
      <p className="footer__text">{props.text}</p>
    </footer>
    
    </>
  )
}

export default Footer;