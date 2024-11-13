export type KanbanType = {
    id: string;
    title: string;
    status: string;
    summary: string;
    type: string;
    priority: string;
    tags: string;
    estimate: number;
    assignee: string;
    rankid: number;
    color: string;
    classname: string;
    [key: string]: string | number; // Allow additional properties with string or number values
}

export type Schedule = {
    id: number;
    subject: string;
    location: string;
    startTime: string;
    endTime: string;
    categoryColor: string;
    [key: string]: string | number; // Allow additional properties with string or number values
}

export type Note = {
    id: number;
    title: string;
    description: string;
    content: string;
    date: string;
    color: string;
    shareWith: ShareWith[];
    tags: string[];
    [key: string]: string | number | ShareWith[] | string[]; // Allow additional properties with compatible types
}

export type ShareWith = {
    id: number;
    userIds: number[];
    accessType: string;
    [key: string]: string | number | number[]; // Allow additional properties with compatible types
}

export type User = {
    id: number;
    name: string;
    email: string;
    username: string;
    password: string;
    kanbans: KanbanType[];
    schedules: Schedule[];
    notes: Note[];
    createdAt: string;
    updatedAt: string;
    [key: string]: string | number | KanbanType[] | Schedule[] | Note[]; // Allow additional properties with compatible types
} 

export type DataType = {
    users: User[];
    [key: string]: User[]; // Allow additional properties with User[] type
}
