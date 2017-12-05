/***
 * Not really need just to please webstorm
 */
import * as ReactObj from "react";
import * as ReactDOMObj from "react-dom";

declare global {
    var React: typeof ReactObj;
    var ReactDOM: typeof ReactDOMObj;
}