import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";
import { DropdownSelectProps } from "./types";

const DropDownSelect: React.FC<DropdownSelectProps> = ({
    placeholder,
    itemData
}) => {
    return (
        <Select>
            <SelectTrigger className="w-[180px] bg-white rounded">
                <SelectValue placeholder={placeholder} className='text-black' />
            </SelectTrigger>
            <SelectContent className='bg-white rounded'>
                {
                    itemData.map((item, index) => (
                        <SelectItem key={index} value={item.value} disabled={item.disabled}>
                            {item.label}
                        </SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}

export default DropDownSelect;