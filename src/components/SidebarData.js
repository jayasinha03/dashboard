import React from 'react';
import * as td from "react-icons/lu";
import * as notes from "react-icons/cg";
import * as cal from "react-icons/sl";
import * as home from "react-icons/fa";

export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <home.FaHome/>,
        cName: 'nav-text'
    },

    {
        title: 'To-do',
        path: '/Todo',
        icon: <td.LuListTodo/>,
        cName: 'nav-text'
    },

    {
        title: 'Notes',
        path: '/Notes',
        icon: <notes.CgNotes/>,
        cName: 'nav-text'
    },

    {
        title: 'Calender',
        path: '/Cal',
        icon: <cal.SlCalender/>,
        cName: 'nav-text'
    }
];