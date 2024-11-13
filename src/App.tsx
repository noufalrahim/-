import { Layout } from './components/Layout';
import { registerLicense } from '@syncfusion/ej2-base';
import { BrowserRouter } from 'react-router-dom';
registerLicense(import.meta.env.VITE_SYNCFUSION_API_KEY)
import './App.css';
import Router from './router/Router/Router';

function App() {


  return (
    <Layout>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Layout>
  )
}

export default App;
