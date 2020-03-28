import React, { useContext, useEffect, useState } from 'react';

const AddProfScreen = () => {
    const addProf = () => {};
    return (
        <div className="container">
            <div className="w-50 m-auto">
                <form onSubmit={addProf}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input className="form-control text-right" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input className="form-control text-right" />
                    </div>
                    <div className="form-group">
                        <label>Image URL</label>
                        <input className="form-control text-right" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control text-right" />
                    </div>
                    <div className="form-group">
                        <label>Research Field</label>
                        <input className="form-control text-right" />
                    </div>
                    <div className="form-group">
                        <label>Bio</label>
                        <textarea className="form-control text-right"></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProfScreen;
