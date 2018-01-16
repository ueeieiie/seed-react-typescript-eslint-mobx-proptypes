
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hello";


// App Location
const appLocation = document.querySelector('.app');


ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    appLocation
);
