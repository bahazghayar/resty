// import { render } from '@testing-library/react';
import React from 'react';

// import Results from '../results/Results.js';

// import { Link } from 'react-router-dom';

class HistoryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            headers: {},
            response: {},
            history: JSON.parse(localStorage.getItem('history')),
            
            trigger: false,
            fetching: false,
        };
    }

    historyHandler = async (e) => {
        let method = e.currentTarget.childNodes[0].innerHTML;
        let url = e.currentTarget.childNodes[1].innerHTML;
        let body = e.currentTarget.childNodes[2].innerHTML;

        const input = document.getElementById(`url`);
        input.value = url;

        const selected = document.getElementById(`${method}`);
        await selected.click();

        const text = document.getElementById('body');
        text.value = body;

        const submit = document.getElementById('submit');
        await submit.click();
    }

    render() {
        let history = JSON.parse(localStorage.getItem('history'));
        return (

            <main>
                <table className="history">
                    <thead>
                        <tr>
                            <th className="th">Method</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((val, i) => {
                            return (
                                <tr key={i + val.methot + val.url} onClick={this.historyHandler} >
                                    <th className="th" id={`his${val.method}`}>{val.method}</th>
                                    <td>{val.url}</td>
                                    <td style={{ display: 'none' }}>{val.body}</td>
                                
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </main>
        );
    }
}



export default HistoryDetails;