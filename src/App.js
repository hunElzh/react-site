import EmployeeProfiler from './pages/crm/EmployeeProfiler'
import BatchDeliveryAlert  from "./pages/crm/BatchDeliveryAlert";
import React from 'react';

const MainRouter = React.lazy(() => import('./router/MainRouter'))
function App() {
  return (
    <div className="App">
        {/*<EmployeeProfiler></EmployeeProfiler>*/}
        <BatchDeliveryAlert></BatchDeliveryAlert>
    </div>
  );
}

export default App;
