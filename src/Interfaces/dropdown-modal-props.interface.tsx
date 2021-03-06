export interface dropdownModalPropsInterface {
    inputLabel: string,
    titleText: string, 
    text: string, 
    mainButtonLabel: string, 
    mainButtonAction: Function, 
    secondaryButtonAction: Function,
    secondaryButtonLabel: string,
    showState: boolean,
    onClose: Function, 
    inputValues: {label: string, value: string}[],
    setInputValue: Function,
}