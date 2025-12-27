import React from 'react';
import { Outlet } from 'react-router-dom';

const LibraryManagement = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default LibraryManagement;