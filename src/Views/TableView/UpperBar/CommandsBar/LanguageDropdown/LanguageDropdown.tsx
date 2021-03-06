import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../../../../Redux/action/language";
import { RootState } from "../../../../../Redux/store";
import { useTranslation } from "react-i18next";
import React from "react";


const LanguageDropdown = () => {
    const {i18n} = useTranslation();
    const dispatch = useDispatch();

    const dispatchLanguage = (lang: string) => {
        dispatch(setLanguage(lang));
    }

    const Language = useSelector((state: RootState) => state.Language);

    const languages = [
        {
            value: 'it',
            icon: '',
        },
        {
            value: 'en',
            icon: '',
        }
    ]

    React.useEffect(() => {
        i18n.changeLanguage(Language);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Language])

    return (
        <div className='language-dropdown'>
            <Dropdown className='dropdown'>
                <Dropdown.Toggle id="dropdown-basic">
                    {Language}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {languages.filter((lan) => {
                        return lan.value !== Language;
                    }).map((lan) => {
                        return (
                            <Dropdown.Item key={lan.value} onClick={() => { dispatchLanguage(lan.value) }}>{lan.value}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default LanguageDropdown;