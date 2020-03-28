import React, { useContext, useEffect } from 'react';
import { Context as ProfContext } from '../../context/ProfContext';
import { Link } from 'react-router-dom';

const ProfsScreen = () => {
    const { state, getAllProfs } = useContext(ProfContext);
    const { profs } = state;
    useEffect(() => {
        getAllProfs();
    }, []);
    if (profs.length === 0) {
        return (
            <div className="container">
                <h2 className="mt-3">No Profs Found!</ h2>
                <Link className="btn btn-dark" to="/add-prof">Add New Prof</Link>
            </div>
        )
    }
    return <div className="container">
        {profs.map(prof => (
            <div key={prof.id} className="card card-body">
                <img src={prof.imageUrl} className="img-thumbnail"/>
            </div>
        ))}
    </div>;
};

export default ProfsScreen;
