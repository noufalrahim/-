
type ShareWith = {
    id: number;
    userIds: number[];
    accessType: string;
}

export type NotesData = {
    id: number;
    title: string;
    description: string;
    content: string;
    date: string;
    color: string;
    shareWith: ShareWith[];
    tags: string[];
}