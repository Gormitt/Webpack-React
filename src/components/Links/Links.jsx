// libs
import { useState } from "react";
// components
import Modal from "../ui/Modal";
import Form from "../ui/Form";
// styles
import "./Links.scss";

// TEST: links
const links = [
    {
        name: "Google",
        path: "http://www.google.com/",
        icon: "bxl-google"
    },
    {
        name: "Gmail",
        path: "http://www.gmail.com/",
        icon: "bx-mail-send"
    },
    {
        name: "Facebook",
        path: "http://www.fb.com/",
        icon: "bxl-facebook"
    }
];

const formFields = [
    {
        name: "name",
        label: "Nazwa",
        type: "textInput",
        valueInit: "",
        valueObligatory: true,
        valueEmpty: "",
        validator: _ => true,
        specialized: {
            placeholder: "np.: Youtube"
        }
    },
    {
        name: "path",
        label: "Adres",
        type: "textInput",
        valueInit: "",
        valueObligatory: true,
        valueEmpty: "",
        validator: val => /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(val),
        specialized: {
            placeholder: "np.: http://www.youtube.com/"
        }
    }
]

const redirect = path => {
    window.open(path);
}

const Links = () => {
    const [modal, setModal] = useState(false);

    return (
        <div className="Links">
            {links.map((l, i) => (
                <div 
                    key={i} 
                    className="link" 
                    onClick={() => redirect(l.path)}
                >
                    <i className={`bx ${l.icon} bx-md`} />
                    <div className="tooltip">
                        {l.name}
                    </div>
                </div>
            ))}
            <div className="separator"></div>
            <div 
                className="link"
                onClick={() => setModal(true)}
            >
                <i className="bx bx-plus bx-md" />
                <div className="tooltip">
                    Dodaj
                </div>
            </div>

            <Modal
                open={modal}
                close={() => setModal(false)}
                title="Link"
                subtitle="Dodawanie nowego linku"
            >
                <Form fields={formFields} width={550} />
            </Modal>
        </div>
    );
}

export default Links;