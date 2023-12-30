import React from "react";
import "../styles/footer.module.css"

export default function Footer(props:any) {
    return (
        <p className="footer">
            {props.copyrightYear} Estudos de Jamstack - NextJS. Todos os direitos reservados.
        </p>
    )
}