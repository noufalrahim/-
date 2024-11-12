import { Box } from "./components/Box";
import Menubar from "../Menubar/Menubar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Notes = () => {

    const content = "Communicating with Windows 10 and Other Apps, the second in a five-part series written by Succinctly series author Matteo Pagani. To download the complete white paper, and other papers in the series, visit the White Paper section of Syncfusion’s Technology Resource Portal."
    const title = "Windows 10 Succinctly"

    return (
        <div>
            <Menubar className="gap-2">
                <Select>
                    <SelectTrigger className="w-[180px] bg-white rounded">
                        <SelectValue placeholder="Sort" className='text-black' />
                    </SelectTrigger>
                    <SelectContent className='bg-white rounded'>
                        <SelectItem value="last_modified">
                            Last Modified
                        </SelectItem>
                        <SelectItem value="name">
                            Name
                        </SelectItem>
                        <SelectItem value="date_created">
                            Date Created
                        </SelectItem>
                        <SelectItem value="size">
                            Size
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px] bg-white rounded">
                        <SelectValue placeholder="View" className='text-black' />
                    </SelectTrigger>
                    <SelectContent className='bg-white rounded'>
                        <SelectItem value="last_modified">
                            Grid
                        </SelectItem>
                        <SelectItem value="name">
                            List
                        </SelectItem>
                    </SelectContent>
                </Select>
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
