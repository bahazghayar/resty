import React from 'react';
import './Form.scss';

const superagent = require('superagent');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: '',
        };
    }

    handleURL = (e) => {
        this.setState({
            url: e.target.value,
        });
    }

    handleMethod = (e) => {
        e.preventDefault();
        this.setState({
            method: e.target.value,
        });
    }

    // handleOnClick = (e)=>{
    //     e.preventDefault();

    // }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            url: e.target.url.value,
            method: this.state.method,
        });
        try {
                const result = await superagent[this.state.method.toLowerCase()](
                    e.target.url.value
                );
                console.log(result);
                let { headers, body } = result;
                this.props.handler(headers, body, this.state);
            
        } catch (error) {
            this.props.handler(null, error.message, this.state);
            console.error(error.message)
        }
    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="URL:" name="url" onClick={this.handleURL} />
                        <button type="submit" >{this.props.prompt}</button>
                    </div>

                    <div className="methods">
                        <button value="GET" defaultChecked onClick={this.handleMethod}>GET</button>
                        <button value="POST" onClick={this.handleMethod}>POST</button>
                        <button value="PUT" onClick={this.handleMethod}>PUT</button>
                        <button value="DELETE" onClick={this.handleMethod}>DELETE</button>
                    </div>
                </form>

                <div className="Display">
                    <h3>{this.state.method}</h3>
                    <h3>{this.state.url}</h3>

                </div>
            </main>
        );
    }

}

export default Form;