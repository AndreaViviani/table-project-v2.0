import { Modal, Form } from "react-bootstrap";
import MainButton from "../MainButton/MainButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import React from "react";
import { inputModalPropsInterface } from "../../Interfaces/input-modal-props.interface";


const NumberInputModal = (props: inputModalPropsInterface) => {
    const { inputLabel, titleText, text, value, mainButtonLabel, mainButtonAction, secondaryButtonLabel, secondaryButtonAction, showState, onClose, setInputValue } = props;
    const [show, setShow] = React.useState(true);


    React.useEffect(() => {
        setShow(showState);
    }, [showState])

    React.useEffect(() => {
        if (show === false && typeof onClose === "function") {
            onClose();
        }
    }, [show])



    return (
        <>
            <Modal show={show} onHide={() => { setShow(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>{titleText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {text}
                    <Form>
                        <Form.Group>
                            <Form.Label>{inputLabel}</Form.Label>
                            <Form.Control type="number" onChange={(e) => {setInputValue(e.target.value)}} defaultValue={value}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {
                        secondaryButtonLabel && secondaryButtonAction &&
                        <SecondaryButton cta={secondaryButtonAction} label={secondaryButtonLabel} />
                    }
                    {
                        mainButtonLabel && mainButtonAction &&
                        <MainButton cta={mainButtonAction} label={mainButtonLabel} />
                    }


                </Modal.Footer>
            </Modal>

        </>
    )
}
export default NumberInputModal;