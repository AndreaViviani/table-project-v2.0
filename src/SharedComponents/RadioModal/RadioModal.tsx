import {Modal, Form } from "react-bootstrap";
import MainButton from "../MainButton/MainButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import React from "react";
import { radioModalPropsInterface } from "../../Interfaces/radio-modal-props.interface";


const RadioModal = (props: radioModalPropsInterface) => {
    const {inputArray, titleText, text, mainButtonLabel, mainButtonAction, secondaryButtonLabel, secondaryButtonAction, showState, onClose, setInputValue } = props;
    const [show, setShow] = React.useState(true);


    React.useEffect(() => {
        setShow(showState);
    }, [showState])

    React.useEffect(() => {
        if (show === false && typeof onClose === "function") {
            onClose();
        }
    }, [show])

    const radioFiels = inputArray.map((item)=>{
        return(
            <Form.Check 
            type={"radio"} 
            key={item.value} 
            label={item.label} 
            name={"city"}
            value={item.value}
            id={item.value}
            onChange={(e) => {setInputValue(e.target.value)}}/>

        )
    })



    return (
        <>
            <Modal show={show} onHide={() => { setShow(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title><h3>{titleText}</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {text}
                    </p>
                    <Form>
                        {radioFiels}
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
export default RadioModal;