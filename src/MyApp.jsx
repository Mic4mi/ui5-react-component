import {
    Avatar,
    ShellBar,
    ShellBarItem,
    Icon
} from "@ui5/webcomponents-react";
import '@ui5/webcomponents-icons/dist/line-chart.js';
import '@ui5/webcomponents-icons/dist/donut-chart.js';
import "@ui5/webcomponents-icons/dist/person-placeholder.js";
import "@ui5/webcomponents-icons/dist/list.js";
import "@ui5/webcomponents-icons/dist/table-view.js";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { useNavigate } from "react-router-dom";

export function MyApp() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate("./");
    };
    return (
        <>
            <ShellBar
                logo={
                    <img src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" />
                }
                profile={
                    <Avatar>
                        <Icon
                            name="person-placeholder"
                            style={{ color: "#df6e0c" }}
                        />
                    </Avatar>
                }
                primaryTitle="Shell Bar"
                onLogoClick={handleLogoClick}
            >
                <ShellBarItem icon="sap-icon://add" text="Add" />
            </ShellBar>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
        </>
    );
}