import React, { Component } from 'react'

// const Footer = ()=>{
// return (<h1>Footer</h1>)
// }

class Footer extends Component {
	constructor(props) {
        super(props)
        
        this.state = {
            'email':'',
            'content':'',
            'imBusy': false,
            'message':''
        }

        this.changeValue = this.changeValue.bind(this)
        this.sendContactMessage = this.sendContactMessage.bind(this)
    }
    
    changeValue(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }



    sendContactMessage(){
        //... state
        console.log(this.state)

        this.setState({
            'imBusy': true
        })


        //... axios
        setTimeout(()=>{
            console.log(this.state)

            this.setState({
                'imBusy': false,
                'email':'',
                'content':'',
                'message':'Dziękujemy za informacje, odezwiemy się niedługo'
            })
        },2000)
    }

    
	render() {
        const {email, content, imBusy, message} = this.state

        if(imBusy === true){
            return (<div className="container">
                <h4>Proszę czekać</h4>
            </div>)
            // pokaż loader
        }
        else{

            if(message !== ''){
                return (<div className="container">
                    <h4 className='green'>{message}</h4>
                </div>)
            }
            else{

                return (
                    <div className='container'>
                        <form>
                            <h4>Zapraszamy do kontaktu</h4>
                            <div className='input-field'>
                                <input name='email' type='email'
                                value={email}
                                onChange={(event)=>{
                                    this.changeValue(event)
                                }}/>
                                <label htmlFor='email'>Wpisz email</label>
                            </div>
                            <div className='input-field'>
                                <textarea
                                    name='content'
                                    value={content}
                                    className='materialize-textarea'
                                    onChange={(event)=>{
                                        this.changeValue(event)
                                    }}
                                />
                                <label htmlFor='content'>Treść wiadomości</label>
                            </div>
                            <button className='waves-effect waves-light btn-large'
                            onClick={(event)=>{
                                event.preventDefault()
                                this.sendContactMessage()
                            }}
                            >
                                Wyślij
                            </button>
                        </form>
                        
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                )
    
            }


        }

	}
}

// komórka pamięci (MyInput)
// komponent MyInput

export default Footer
