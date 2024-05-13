
"use client";
import ContextClientProvider from "@/src/providers/ContextClientProvider";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./_partials/Header";
import { useState, useEffect } from "react";
import axios from "axios";

const Layout = ({ children }) => {
	
	const [user, setUser] = useState({});
	console.log("USER:", user)

	useEffect(() => {
		
		axios({
			method: 'get',
			url: 'http://localhost:4000/user',
		})
		.then(function (response) {
			setUser(response.data);
			});
	}, []);



	return (
		<ContextClientProvider>
			<h1>email:{user.email} </h1>
			<div className="flex h-screen overflow-hidden">
				{user?.email ? <Sidebar /> : ""}
				

				<div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
				{user?.email ? <Header /> : ""}
					<main>
						<div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10 ">
							{children}
						</div>
					</main>
				</div>
			</div>
		</ContextClientProvider>
	);
};

export default Layout;

