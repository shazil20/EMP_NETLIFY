import React, { useEffect, useState } from 'react';
import Usidebar from './Usidebar';
import axios from 'axios';

const Usalary = () => {
    const [salarySlip, setSalarySlip] = useState(null);
    const [allsalarySlip, allsetSalarySlip] = useState([]);
    const udata = JSON.parse(sessionStorage.getItem('ulogin'));
    
    useEffect(() => {
        if (udata && udata.access) {
            const token = udata.access;
            axios.get('http://shazilemp.pythonanywhere.com/Employee_management_system/salary_slips/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                const slips = response.data;
                if (slips.length > 0) {
                    setSalarySlip(slips[0]);
                }
                allsetSalarySlip(slips);
            })
            .catch(error => {
                console.error('There was an error fetching the salary slips!', error);
            });
        }
    }, []);

    const handleDownload = (slipFile) => {
        const link = document.createElement('a');
        link.href = slipFile;
        link.download = slipFile.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!udata || !udata.access) {
        return <div>Loading...</div>;
    }

    return (
        <div className='row container-fluid'>
            <div className="col-md-3">
                <Usidebar />
            </div>
            <div className="col-md-9">
                <div className="container">
                    {salarySlip ? (
                        <div>
                            <h2>Latest Salary Slip</h2>
                            <p>Upload Date: {new Date(salarySlip.upload_date).toLocaleDateString()}</p>
                            <button onClick={() => handleDownload(salarySlip.slip_file)} className="btn btn-primary">
                                Download Latest Salary Slip
                            </button>
                        </div>
                    ) : (
                        <p>Loading latest salary slip...</p>
                    )}

                    <h2 className="mt-4">All Salary Slips</h2>
                    {allsalarySlip.length > 0 ? (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Upload Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allsalarySlip.map((slip, index) => (
                                    <tr key={index}>
                                        <td>{new Date(slip.upload_date).toLocaleDateString()}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDownload(slip.slip_file)}
                                                className="btn btn-primary"
                                            >
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Loading salary slips...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Usalary;
