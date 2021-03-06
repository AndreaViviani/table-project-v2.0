import Table from "./Table/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const TableView = () => {

    const LoadedColumns = useSelector((state: RootState) => state.Columns);
    const LoadedData = useSelector((state: RootState) => state.Data);

    return (
        <>
            {
                LoadedColumns && LoadedData &&
                <>
                {
                    Array.isArray(LoadedColumns) && Array.isArray(LoadedData) && 
                        <Table />
                }
                </>
            }

        </>
    )
}

export default TableView;