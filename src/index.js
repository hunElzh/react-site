import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loading from "./pages/loading/loading";
import "./index.css";
import MainRouter from "./router/MainRouter";

const rootElement = document?.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Suspense fallback={<Loading />}>
      <React.StrictMode>
        <MainRouter />
      </React.StrictMode>
    </Suspense>
  );
}
