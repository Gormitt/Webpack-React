// libs
import { useState } from "react";
// styles
import "./Useful.scss";
// components
import Todos from "./Todos/Todos";
import Birthdays from "./Birthdays/Birthdays";
import Collections from "./Collections/Collections";
import Modal from "../ui/Modal";
import Form from "../ui/Form";

// for todos form
const todosFields = [
    {
        name: "name", label: "Nazwa", type: "textInput",
        valueInit: "", valueObligatory: true, valueEmpty: "",
        validator: _ => true,
        specialized: {
            placeholder: "np. Przygotowania do wyjazdu"
        }
    }
];

const birthdayFields = [
    {
        name: "name", label: "Imię", type: "textInput",
        valueInit: "", valueObligatory: true, valueEmpty: "",
        validator: _ => true,
        specialized: {
            placeholder: "np. Krzysztof"
        }
    },
    {
        name: "surname", label: "Nazwisko", type: "textInput",
        valueInit: "", valueObligatory: true, valueEmpty: "",
        validator: _ => true,
        specialized: {
            placeholder: "np. Kowalski"
        }
    },
    {
        name: "birthdate", label: "Data urodzin", type: "textInput",
        valueInit: "", valueObligatory: true, valueEmpty: "",
        validator: _ => true,
        specialized: {
            placeholder: "np. 2021/05/21"
        }
    }
];

const collectionFields = [
    {
        name: "name", label: "Nazwa", type: "textInput",
        valueInit: "", valueObligatory: true, valueEmpty: "",
        validator: _ => true,
        specialized: {
            placeholder: "np. Programowanie"
        }
    }
];

const Useful = () => {
    const [todoModal, setTodoModal] = useState(false);
    const [bdModal, setBdModal] = useState(false);
    const [collectionModal, setCollectionModal] = useState(false);

    return (
        <div className="Useful">
            <div className="container">
                {/* TITLE */}
                <div className="title-container">
                    <div className="title">TODOS</div>
                    <div className="button" onClick={() => setTodoModal(true)}>
                        <i className="bx bx-plus bx-sm" />
                    </div>
                </div>
                {/* CONTENT */}
                <div className="content-container">
                    <Todos />
                </div>
            </div>
            <div className="container">
                {/* TITLE */}
                <div className="title-container">
                    <div className="title">URODZINY</div>
                    <div className="button" onClick={() => setBdModal(true)}>
                        <i className="bx bx-plus bx-sm" />
                    </div>
                </div>
                {/* CONTENT */}
               <div className="content-container">
                    <Birthdays />
               </div>
            </div>
            <div className="container">
                {/* TITLE */}
                <div className="title-container">
                    <div className="title">KOLEKCJA</div>
                    <div className="button" onClick={() => setCollectionModal(true)}>
                        <i className="bx bx-plus bx-sm" />
                    </div>
                </div>
                {/* CONTENT */}
                <div className="content-container">
                    <Collections />
                </div>
            </div>

            {/* modals */}
            {/* todos */}
            <Modal
                open={todoModal}
                close={() => setTodoModal(false)}
                title="Todo"
                subtitle="Dodawanie nowej listy celów"
            >
                <Form 
                    fields={todosFields}
                    width={550}
                />
            </Modal>
            {/* birthday */}
            <Modal
                open={bdModal}
                close={() => setBdModal(false)}
                title="Urodziny"
            >
                <Form 
                    fields={birthdayFields}
                    width={550}
                />
            </Modal>
            {/* collection */}
            <Modal
                open={collectionModal}
                close={() => setCollectionModal(false)}
                title="Kolekcja"
                subtitle="Tworzenie kolekcji linków"
            >
                <Form 
                    fields={collectionFields}
                    width={550}
                />
            </Modal>
        </div>
    );
}

export default Useful;