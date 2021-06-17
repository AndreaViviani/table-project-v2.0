import { useSelector, useDispatch } from "react-redux";
import React from "react";
import ClassicModal from "../../SharedComponents/ClassicModal/ClassicModal";
import {noError} from "../../Redux/action/error";
import { RootState } from "../../Redux/store";

const ErrorEffect = () => {
    const dispatch = useDispatch();
    const error = useSelector((state: RootState) => state.Error);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        if (error === false) {
            setShow(false);
        } else {
            setShow(true);
        }
    }, [error]);

    const dispatchNoError = () => {
        dispatch(noError());
    }


    return (
        <>
            <ClassicModal titleText={"Error"} text={error.toString()} mainButtonLabel={"Chiudi"} mainButtonAction={dispatchNoError} showState={show} onClose={dispatchNoError}/>
        </>
    )
}

export default ErrorEffect;