
export const convert = (format: string, dataToConvert: any) => {
    switch (format) {
        case "csv":
            const lines1 = dataToConvert.toString().split("\n");

            const result1 = [];

            const headers1 = lines1[0].split(",");

            for (let i = 1; i < lines1.length; i++) {

                const obj1: any = {};
                const currentline1 = lines1[i].split(","); //possibilit√† di scegliere separatore

                for (let j = 0; j < headers1.length; j++) {
                    obj1[headers1[j]] = currentline1[j];
                }

                result1.push(obj1);

            }
            return result1;

        case "ssv":
            const lines = dataToConvert.toString().split("\n");

            const result = [];

            const  headers = lines[0].split(";");

            for (let i = 1; i < lines.length; i++) {

                const obj: any = {};
                const currentline = lines[i].split(";"); //possibilit√† di scegliere separatore

                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentline[j];
                }

                result.push(obj);

            }
            return result;

        case "json":

            return JSON.parse(dataToConvert);

        default:
            break;
    }
}
