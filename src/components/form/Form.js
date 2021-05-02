import React from 'react';
import './Form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            method: '',
        }
    }

    handleURL = (e) => {
        // e.preventDefault();
        console.log(e.target.value)
        this.setState({
            url: e.target.value,
        });
    }
    
    handleMethod = (e) => {
        e.preventDefault();

        console.log( e.target.value)
        this.setState({
            method: e.target.value,
        });
    }

    handleOnClick = (e)=>{
        e.preventDefault();
    }

    render() {
        return (
            <main>
                <form action="">

                    <div>
                        <input type="text" placeholder="URL:" name="url" onChange={this.handleURL} />
                        
                        <button onClick={this.handleOnClick}>GO!</button>
                    </div>
                    
                    <div className="methods">
                    <button value="GET" onClick={this.handleMethod}>GET</button>
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