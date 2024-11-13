import { Box } from "./components/Box";
import Menubar from "../Menubar/Menubar";
import DropDownSelect from "../Layout/UI/DropdownSelect/DropDownSelect";

const Notes = () => {

    const content = "Communicating with Windows 10 and Other Apps, the second in a five-part series written by Succinctly series author Matteo Pagani. To download the complete white paper, and other papers in the series, visit the White Paper section of Syncfusion’s Technology Resource Portal."
    const title = "Windows 10 Succinctly"
    return (
        <div>
            <Menubar className="gap-2">
                <DropDownSelect
                    placeholder="Sort"
                    itemData={[
                        { value: "last_modified", label: "Last Modified" },
                        { value: "name", label: "Name" },
                        { value: "date_created", label: "Date Created" },
                        { value: "size", label: "Size" }
                    ]}
                />
                <DropDownSelect
                    placeholder="Filter"
                    itemData={[
                        { value: "all", label: "All" },
                        { value: "today", label: "Today" },
                        { value: "yesterday", label: "Yesterday" },
                        { value: "last_week", label: "Last Week" }
                    ]}
                />
                <DropDownSelect
                    placeholder="View"
                    itemData={[
                        { value: "grid", label: "Grid" },
                        { value: "list", label: "List" }
                    ]}
                />
            </Menubar>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-5 border-2 border">
                <Box
                    isNew
                />
                {
                    Array.from(Array(12).keys()).map((_, index) => (
                        <Box
                            key={index}
                            title={title}
                            content={content}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Notes;
