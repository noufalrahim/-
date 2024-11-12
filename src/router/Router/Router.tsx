import {Routes, Route} from 'react-router-dom';
import { useRoutePaths } from '@/hooks/useRoutePaths';
import { Kanban } from '@/components/Kanban';
import { Calendar } from '@/components/Calendar';
import { NewNote, Notes } from '@/components/Notes';

function Router() {
    const {
        LOGIN_PATH,
        ROOT_PATH,
        NOTES_PATH,
        NEW_NOTE_PATH,
        KANBAN_PATH,
        CALENDAR_PATH
    } = useRoutePaths();

    return (
        <Routes>
            <Route path={NOTES_PATH} element={<Notes />} />
            <Route path={NEW_NOTE_PATH} element={<NewNote />} />
            <Route path={KANBAN_PATH} element={<Kanban />} />
            <Route path={CALENDAR_PATH} element={<Calendar />} />
        </Routes>
    )
}

export default Router;