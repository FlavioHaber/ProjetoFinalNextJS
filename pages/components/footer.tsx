import React from "react";
import * as footerStyles from "../styles/footer.module.css"

export default function Footer(props:any) {
    return (
        <p className={footerStyles.footer}>
            {props.copyrightYear} Estudos de Jamstack - NextJS. Todos os direitos reservados.
        </p>
    )
}