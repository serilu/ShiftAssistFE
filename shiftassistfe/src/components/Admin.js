import React from 'react';
import './Admin.css';
import back from '../assets/arrow-back.svg';
import axios from "axios";

class Admin extends React.Component {

    state = {
        pakketType1: "", 
        pakketType2: "", 
        pakketType3: "", 
        pakketType4: "", 
        naamAfdeling: "",
        loading: false,

    };

    saveName = (event) => {
        this.setState({naamAfdeling: event.target.value});
        console.log(this.state.naamAfdeling);
    }

    onSearch = (event) =>{
        const section = document.getElementById('pakketNamen');
        const pakketNaamInput = document.getElementsByClassName('pakketNaamInput')[0]
        section.innerHTML = "";
        for (let i = 0; i < event.target.value; i++) {
            let inputVeld = pakketNaamInput.cloneNode(true)
            inputVeld.id = i+1
            section.appendChild(inputVeld);
        }
        this.setState({aantalTypes:event.target.value})
    }

    saveType = (event) =>{

        
        if (event.target.id == 1) {
            this.setState({
                pakketType1: event.target.value
        })};
        if (event.target.id == 2) {
            this.setState({
                pakketType2: event.target.value
        })};
        if (event.target.id == 3) {
            this.setState({
                pakketType3: event.target.value
        })};
        if (event.target.id == 4) {
            this.setState({
                pakketType4: event.target.value
        })};

    }

    // saveType(event){
    //     console.log("a neef");
    
    //     event.preventDefault();
    //     let pakketString = "";

    //     for (let i = 0; i < this.state.aantalTypes; i++) {
    //         let value = document.getElementById(i+1).value
    //         pakketString = pakketString + "|" + value;
    //         this.setState({pakketTypes: pakketString})
    //     }
    // };

    submit = (event) => {
        event.preventDefault();
        this.callDB()
    }
    callDB = () => {
        // this.setState({loading: true})

        const dbData = {
            pakketType1: this.state.pakketType1,
            pakketType2: this.state.pakketType2,
            pakketType3: this.state.pakketType3,
            pakketType4: this.state.pakketType4,
            name: this.state.naamAfdeling,
        }
        console.log(dbData);
        axios.post(`api/addAfdeling`, dbData).then(response => {
            console.log(response)
            if (response.data.status === 200) {
                console.log("yo hij doet het man")
                console.log(response.data)
                window.location.replace("/home");


    } else {
        window.location.replace("/admin");
    }
    });
    }

    render() {

        if (this.state.loading) {
            return(
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            )
            
        } else {
            return (

            
                <main className="login_main">
                 <nav className='navigation'>
                      <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                      <h1>Afdeling Toevoegen </h1>
                  </nav>
                    <form enctype="multipart/form-data" action="/products" method="post" className="login_main_form" onSubmit={this.submit}>
    
    
                        <section className="login_main_form_section">
                            <label className="login_main_form_section_label">Naam Afdeling</label>
                            <input required className="login_main_form_section_input" placeholder='adfdeling naam' onChange={this.saveName} type="text"/>
    
                        </section>
    
    
                            <section className='login_main_form_section'>
                                <label className="login_main_form_section_label" >Naam Pakketten</label>
                                <section id="pakketNamen">
                                    <input required id="1" type="text" className="login_main_form_section_input" onChange={this.saveType} name="types"/>
                                    <input id="2" type="text" className="login_main_form_section_input" onChange={this.saveType} name="types"/>
                                    <input id="3" type="text" className="login_main_form_section_input" onChange={this.saveType} name="types"/>
                                    <input id="4" type="text" className="login_main_form_section_input" onChange={this.saveType} name="types"/>
                                </section>
                            </section>
    
                            <button className="Button" type="submit"> Verzend</button>
    
                    </form>
                </main>
               
            );
        }
    }
}

export default Admin;