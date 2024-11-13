import React, { useState } from "react";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import axios from "axios";
import { KanbanType } from "@/App";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Kanban = () => {

  const [kanbanData, setKanbanData] = useState([]);

  const kanbanGrid = [
    {
      headerText: 'To Do',
      keyField: 'Open',
      allowToggle: true
    },

    {
      headerText: 'In Progress',
      keyField: 'InProgress',
      allowToggle: true
    },

    {
      headerText: 'Testing',
      keyField: 'Testing',
      allowToggle: true,
    },

    {
      headerText: 'Done',
      keyField: 'Close',
      allowToggle: true
    },
  ];

  const avatar = (name: string | number) => {
    if (typeof name === 'number') {
      return name.toString().split('').map((item) => String.fromCharCode(parseInt(item) + 65)).join('');
    }
    return name.split(' ').map((item) => item.charAt(0).toUpperCase()).join('');
  }

  const cardTemplate = (data: KanbanType) => (
    // <div className="px-5 py-5 flex gap-0 flex-col">
    //   <div className="text-sm text-gray-600"><>{data.Title}</></div>
    //   <div className="kanban-summary">{data.Summary}</div>
    //   {/* <div><>Assignee:</> {data.Assignee}</div>
    //   <div><>Priority:</> {data.Priority}</div>
    //   <div><>Type:</> {data.Type}</div> */}
    // </div>
    <div className="text-sm px-5 py-5 flex flex-col gap-2">
      <div className="p-0 m-0 text-gray-500">
        {data.Title}
      </div>
      <div className="p-0 m-0">
        {data.Summary}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="rounded bg-red-600 px-2 text-white flex items-center justify-center">
          {data.Priority}
        </div>
        <div className="rounded-full bg-blue-300 text-sm justify-center items-center flex p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {avatar(data.Assignee)}
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-gray-600 text-white px-5 border border-black rounded">
                <p>{data.Assignee}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        const data = response.data;
        console.log("kanban", data[0].kanbans);
        const transformedData = data[0].kanbans.map((item: KanbanType) => {
          return Object.keys(item).reduce<Record<string, unknown>>((acc, key) => {
            const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
            acc[capitalizedKey] = item[key];
            return acc;
          }, {});
        });
        setKanbanData(transformedData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="">
      <KanbanComponent
        id="kanbanBoard"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Title', template: cardTemplate }}

      >
        <ColumnsDirective>
          {kanbanGrid.map((data, index) => (
            <ColumnDirective
              key={index}
              {...data}
            />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
}

export default Kanban;