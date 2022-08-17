import React from 'react';
import back from '../../assets/arrow-back.svg';
import './Station.css';
import axios from 'axios';
import '../Loading.css';

class Afdeling extends React.Component {

    state = { 
        totaal: 0, 
        pakkettypes: [],
        types:[],
        afdeling:"",
        onLoad: true, 
        test: [],
        id: 0,
        loading: true,
    };



    setValue = event => {

        sessionStorage.setItem(event.target.id, event.target.value)
    }
    
    getData = () => {
        const afdeling = sessionStorage.getItem("afdeling")
        const afdelingData = {
            afdeling: afdeling,
        }

        axios.post(`api/getPakkettype`, afdelingData).then(response => {
            if (response.data.status === 200) {
                this.setState({pakkettypes: Object.values(response.data.pakkettype), loading: false});
                
    }});   
    }

    submit = (event) => {
        event.preventDefault();
        let tot = 0;

        for (let i = 0; i < this.state.pakkettypes.length; i++) {
            tot = tot + Number(sessionStorage.getItem(this.state.pakkettypes[i].pakkettype));
        }
        sessionStorage.setItem(sessionStorage.getItem("afdeling") + "_totaal", tot);
        sessionStorage.setItem(sessionStorage.getItem("afdeling") + "_check", 'gg-check-o');
        window.location.replace("/home");
        
    }

    render() {
        if (this.state.onLoad === true) {
            this.getData();
            this.setState({onLoad:false})
        }

        
        if (this.state.loading) {
            return(
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            )
            
        } else {
            return (
            
                <main className="Station-main">
                    <nav className='navigation'>
                        <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                        <h1>{sessionStorage.getItem("afdeling")}</h1>
                    </nav>
                    <header className='header'>
                        <p>Type</p> <p className='rightp'>Amount</p>
                    </header>
    
                <form onSubmit={this.submit}>
                    <article id="pakketten">
                        {this.state.pakkettypes.map((pakkettype) => {
    
                            return (
                                <section className='inputLine'>
                                    <label htmlFor="sampling">{pakkettype.pakkettype}</label>
                                    <input type="number" id={pakkettype.pakkettype} name={pakkettype.pakkettype} min="0" max="999" placeholder={sessionStorage.getItem(pakkettype.pakkettype)} onChange={this.setValue}></input>
                                </section>
                            ) 
                        })}     
                    </article>
            
                    <button type="submit" className='Button'>Submit</button>
                </form>
                </main>
            )
                    }

        

    }
}

export default Afdeling;