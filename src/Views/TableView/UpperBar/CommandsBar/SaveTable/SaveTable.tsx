import MainButton from "../../../../../SharedComponents/MainButton/MainButton"
import SecondaryButton from "../../../../../SharedComponents/SecondaryButton/SecondaryButton";
import style from "./SaveTable.module.css";
import {useSelector, useDispatch} from "react-redux";
import {saveTable} from "../../../../../Http/httpServices";
import {setLoadingState, unsetLoadingState} from "../../../../../Redux/action/loading";
import {displayError} from "../../../../../Redux/action/error";
import ClassicModal from "../../../../../SharedComponents/ClassicModal/ClassicModal";
import InputModal from "../../../../../SharedComponents/InputModal/InputModal";
import React from "react";
import { RootState } from "../../../../../Redux/store";
import { useTranslation } from "react-i18next";

const SaveTable = () => {
    const LoadedData = useSelector((state: RootState )=> state.Data);
    const LoadedName = useSelector((state: RootState) => state.Name);
    const [okModalIsOpen, setOkModalIsOpen] = React.useState(false);
    const [saveAsModalIsOpen, setSaveAsModalIsOpen] = React.useState(false);
    const [saveAsName, setSaveAsName] = React.useState <string>(LoadedName);
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const dispatchSetLoadingState = () => {
        dispatch(setLoadingState());
    }

    const dispatchUnsetLoadingState = () => {
        dispatch(unsetLoadingState());
    }    

    const dispatchError = (err: string) => {
        dispatch(displayError(err));
    }

    
    const save = (name = LoadedName) => {
        dispatchSetLoadingState();
        (async () => {
            const response = await saveTable(LoadedData, name);
            if (await response.error) {
                dispatchUnsetLoadingState();
                dispatchError(response.errorText)
            } else {
                dispatchUnsetLoadingState();
                setOkModalIsOpen(true);
            }
        })()
        
    }

    const saveAs =() => {
        setSaveAsName(LoadedName);
        setSaveAsModalIsOpen(true);
    }


    return (
        <>
        <div className={style.saveDiv}>
            <SecondaryButton label="Salva con nome" cta={() => {saveAs()}}/>
            <MainButton label="Salva" cta ={() => {save()}}/>
        </div>
        {
            okModalIsOpen &&
            <ClassicModal 
            titleText={t('commandr-bar.save.success-modal.title-text')}
            text={t('commandr-bar.save.success-modal.text')}
            mainButtonLabel={t('buttons.close')}
            mainButtonAction={() => {setOkModalIsOpen(false)}}
            showState={okModalIsOpen}
            onClose = {() => setOkModalIsOpen(false)}
            />
        } {
            saveAsModalIsOpen && 
            <InputModal 
            titleText={t('commands-bar.save-as.save-as-modal.title-text')}
            inputLabel={t('commands-bar.save-as.save-as-modal.input-label')}
            mainButtonLabel={t('buttons.confirm')}
            mainButtonAction={ () => {save(saveAsName); setSaveAsModalIsOpen(false)}}
            secondaryButtonLabel={t('buttons.cancel')}
            value={saveAsName}
            secondaryButtonAction={() => setSaveAsModalIsOpen(false)}
            onClose={()=>{setSaveAsModalIsOpen(false)}}
            showState={saveAsModalIsOpen}
            setInputValue={(value: string)=> {setSaveAsName(value)}}
            />
        }
        </>

    )
}

export default SaveTable;