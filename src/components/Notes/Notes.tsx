import React from "react";
import { Box } from "./components/Box";

const Notes = () => {

    const content = "Communicating with Windows 10 and Other Apps, the second in a five-part series written by Succinctly series author Matteo Pagani. To download the complete white paper, and other papers in the series, visit the White Paper section of Syncfusion’s Technology Resource Portal."
    const title = "Windows 10 Succinctly"

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
    );
}

export default Notes;
