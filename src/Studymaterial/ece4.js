
import React from "react";
import "./studymaterial.css";

function ece4() {
    return (
        <div className="ece4">
            <div id="sm">
                <h2>ECE SEM-4 TEXT BOOKS</h2>
                <table id="smtable">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th colSpan="2">Book Name</th>
                            <th> Book Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Integrated Circuits </td>
                            <td colSpan="2">
                                Design with Operational Amplifiers <br></br    >and Analog Integrated Circuits
                            </td>
                            <td>
                                <a href="https://3lib.net/book/601017/781374" target="-">
                                    click here
                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Signal Processing</td>
                            <td colSpan="2">Digital Signal Processing,<br></br> A computer based approach</td>
                            <td>
                                <a href="https://3lib.net/book/463584/9d5af9" target="-">
                                    click here
                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>OT</td>
                            <td colSpan="2">
                                Optimization Theory and Applications
                            </td>
                            <td>
                                <a href="https://3lib.net/book/808076/c23c71" target="-">
                                    click here
                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>CT</td>
                            <td colSpan="2">Fundamentals of Communication Systems</td>
                            <td><a href="https://3lib.net/book/2628236/875c34" target="-">click here </a></td>
                        </tr>
                        <tr>
                            <td>TLRS</td>
                            <td colSpan="2">
                                Field and Wave Electromagnetics
                            </td>
                            <td>
                                <a href="https://3lib.net/book/487156/8d6332" target="-">
                                    click here
                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ece4;
