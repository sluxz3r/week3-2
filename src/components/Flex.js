import React, { Component } from 'react';

class Flex extends Component{
    constructor(props) {
    super(props);

    this.state = {
        act: 0,
        index: '',
        datas: []
    };
};
    render(){
        let datas = this.state.datas;
        return (
            <div>
               <div className="App">
                            <pre>
                                {datas.map((data, i) =>
                                    <li key={i} className="myList">
                                        {data.image}, {data.title}, {data.description}
                                        <button onClick={() => this.fRemove(i)} className="myListButton">remove </button>
                                        <button onClick={() => this.fEdit(i)} className="myListButton">edit </button>
                                    </li>
                                )}
                            </pre>
                            <div>AHSIAP</div>
                        </div>
            </div>
        );
    }
}

export default Flex;