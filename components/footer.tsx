import React from "react";
import "../styles/footer.css"

export default function Footer(props:any) {
    return (
        <p className="footer">
            {props.copyrightYear} MIT Desenvolvimento Full Stack - Instituto Infnet. Todos os direitos reservados.
        </p>
    )
}