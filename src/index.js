import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Loading from "./pages/loading/index";
import './index.css';
import App from './App';
import MainRouter from "./router/MainRouter";

const rootElement = document?.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <Suspense fallback={<Loading/>}>
            <React.StrictMode>
                {/*<MainRouter/>*/}
                <App/>
            </React.StrictMode>
        </Suspense>
    );
}

