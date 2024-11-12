import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextAreaComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ChipListComponent, ChipDirective, ChipsDirective } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React from 'react';
const NotesForm = () => {
    const usersData: string[] =
        ["John", "Doe", "Smith", "Jerry", "Kumar", "David", "Paul", "George", "Rajan", "Harry", "Ravi", "Kishore", "Kumar", "David", "Paul", "George", "Rajan", "Harry", "Ravi", "Kishore"];
    const accessData: string[] = ['Edit', 'View only'];

    const chipsData = ['Important', 'Work', 'Personal', 'Todo', 'Done', 'New', 'Old', 'Urgent', 'Later', 'Soon', 'Never', 'Maths', 'Physics', 'Chemistry', 'Political Science']

    const [selectedChips, setSelectedChips] = React.useState<string[]>([]);

    const handleChange = (e: { value: string[] }) => {
        setSelectedChips(e.value);
    }

    return (
        <div className='flex gap-4 flex-col'>
            <TextBoxComponent placeholder="title" floatLabelType="Auto" />
            <TextAreaComponent placeholder="Enter description" floatLabelType="Always" />
            <div className='flex flex-row gap-4'>
                <MultiSelectComponent id="mtselement" placeholder='Share with' dataSource={usersData} />
                <DropDownListComponent id="ddlelement" placeholder='Access' dataSource={accessData} />
            </div>
            <div>
                <MultiSelectComponent id="tags" placeholder='Add tags' dataSource={chipsData} onChange={handleChange} />
            </div>
            <ChipListComponent
            >
                <ChipsDirective>
                    {
                        selectedChips.map((chip, index) => {
                            return <ChipDirective key={index} text={chip} />
                        })
                    }
                </ChipsDirective>
            </ChipListComponent>
        </div>
    )
}

export default NotesForm;