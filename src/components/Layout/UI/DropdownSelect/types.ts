
type ItemData = {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface DropdownSelectProps {
    placeholder: string;
    itemData: ItemData[];
}