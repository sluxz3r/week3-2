import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        width: '50%',
        height: '60%',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
    p: {
        cursor: 'pointer',
    }
};

Modal.setAppElement('#root')


class Modal1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            tittle: 'Add Books',
            act: 0,
            index: '',
            datas: []
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    componentDidMount() {
    };

    fSubmit = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let image = this.refs.image.value;
        let title = this.refs.title.value;
        let description = this.refs.description.value;

        if (this.state.act === 0) {   //new
            let data = {
                image, title, description
            }
            datas.push(data);
        } else {                      //update
            let index = this.state.index;
            datas[index].image = image;
            datas[index].title = title;
            datas[index].description = description;

        }

        this.setState({
            datas: datas,
            act: 0
        });

        this.refs.myForm.reset();
        this.refs.title.focus();
    };

    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });

        this.refs.myForm.reset();
        this.refs.title.focus();
    };

    fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.image.value = data.image;
        this.refs.title.value = data.title;
        this.refs.description.value = data.description;

        this.setState({
            act: 1,
            index: i
        });

        this.refs.title.focus();
    }


    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }



    render() {
        let datas = this.state.datas;
        return (
            <div>
                <p onClick={this.openModal} className='add'>ADD</p>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <p onClick={this.closeModal}>X</p>
                        <h2>{this.state.tittle}</h2>
                        <form ref="myForm" className="myForm">
                            Image Url <input type="text" ref="image" placeholder="Image Url" className="formField" />
                            Title <input type="text" ref="title" placeholder="Title" className="formField" />
                            Description <input type="text" ref="description" placeholder="Description" className="formField" />
                            <button onClick={(e) => this.fSubmit(e)} className="myButton">Save </button>
                        </form>
                </Modal>
                <h1>
                <pre>
                                {datas.map((data, i) =>
                                    <li key={i} className="myList">
                                        <img src={data.image} alt="gambar" />
                                        <p>{data.title}</p>
                                        <a>Writer : {data.description}</a> 
                                        <button onClick={() => this.fRemove(i)} className="myListButton">remove </button>
                                        <button onClick={() => this.fEdit(i)} className="myListButton">edit </button>
                                    </li>
                                )}
                            </pre>
                </h1>
            </div>
        );
    }
}

export default Modal1;
