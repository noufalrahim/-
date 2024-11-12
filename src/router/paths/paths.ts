const ROOT_PATH = '/';
const LOGIN_PATH = '/login';
const NOTES_PATH = '/notes'
const NEW_NOTE_PATH = '/notes/new';
const KANBAN_PATH = '/kanban';
const CALENDAR_PATH = '/calendar';

const paths = {
    ROOT_PATH,
    LOGIN_PATH,
    NOTES_PATH,
    NEW_NOTE_PATH,
    KANBAN_PATH,
    CALENDAR_PATH,
} as const;

export default paths;