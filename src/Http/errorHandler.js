export const errorHandler = (response) => {
    if (response.status !== 200) {
    
        return response.statusText;
    }
    if (response.error){
        return JSON.stringify(response.error);
    }
    return false;

}