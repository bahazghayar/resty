import React from 'react';
import './Form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: 'GET',
            body: '',
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
        await this.setState({
            url: e.target.url.value,
            method: this.state.method,
            body: e.target.body.value,
        });
        this.props.handler(this.state);
    };


    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="URL:" name="url" id="url" onClick={this.handleURL} />
                        <button type="submit"  id="submit" >{this.props.prompt}</button>
                    </div>
                    <br />
                    <textarea type="text" name="body"  id="body" placeholder="Request body" rows="3" cols="40" />

                    <div className="methods">
                        <button value="GET" id="GET" defaultChecked onClick={this.handleMethod}>GET</button>
                        <button value="POST" id="POST" onClick={this.handleMethod}>POST</button>
                        <button value="PUT" id="PUT" onClick={this.handleMethod}>PUT</button>
                        <button value="DELETE" id="DELETE" onClick={this.handleMethod}>DELETE</button>
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