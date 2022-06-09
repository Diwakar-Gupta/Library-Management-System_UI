 /**
 * Default Layout
 * This will be the main Layout. (Implemented on the Home page).
 */

import React from "react";
import "./defaultLayout.css";

//Components
import SideBar from "components/Sidebar/sidebar";

export default function DefaultLayout({ children }) {
	return (
		<div className="main_layout">
 			<SideBar />
			{children}
{/* // 			<Footer /> */}
		</div>
	);
}
