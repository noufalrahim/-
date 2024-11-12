import { IoAddCircle } from 'react-icons/io5';
import { Layout } from './components/Layout';
import { useState } from 'react';
import { Modal } from './components/Model';
import { Kanban } from './components/Kanban';
import { registerLicense } from '@syncfusion/ej2-base';
import { BrowserRouter } from 'react-router-dom';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWGtCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWH5eeHVVQ2RdUEBwWUM=')
import './App.css';
import { Calendar } from './components/Calendar';
import Router from './router/Router/Router';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Layout>
        {/* <div className='justify-center flex items-center w-full'> */}
        {/* <IoAddCircle size={25} onClick={() => setIsOpen(true)}/> */}
        {/* <Kanban /> */}
        {/* <Calendar /> */}
        {/* </div> */}

        {/* {
        isOpen && (
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title='Add New Project'
          >
            <div>
              <p>Modal content</p>
            </div>
          </Modal>
        )
      } */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Layout>

    </>
  );
}

export default App;
