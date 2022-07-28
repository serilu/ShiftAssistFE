import React from 'react';
import './Admin.css';
import back from '../assets/arrow-back.svg';
import axios from "axios";

class Admin extends React.Component {

    state = { aantalTypes:1, pakketTypes: "", naamAfdeling: ""

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
            section.appendChild(inputVeld)
        }
        this.setState({aantalTypes:event.target.value})
    }

    saveTypes = (event) => {
        event.preventDefault();
        let pakketString = "";

        for (let i = 0; i < this.state.aantalTypes; i++) {
            let value = document.getElementById(i+1).value
            pakketString = pakketString + "|" + value;
            this.setState({pakketTypes: pakketString})
        }
    }

    submit = (event) => {
        event.preventDefault();
        this.callDB();
    }
    callDB = () => {


        let dbData = {}

        dbData = {
            naamAfdeling: this.state.naamAfdeling,
            pakketTypes: this.state.pakketTypes,
           
            
        }
        console.log(dbData);

        // axios.post(`api/addAfdeling`, dbData).then(response => {

        // });
    }

    render() {
        return (

            
            <main className="login_main">
             <nav className='navigation'>
                  <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                  <h1>Log In </h1>
              </nav>
                <form className="login_main_form" onSubmit={this.submit}>


                        <label className="login_main_form_section_label" for="afdeling">Naam Afdeling:</label>
                        <input className="login_main_form_section_input" placeholder='adfdeling naam' onChange={this.saveName} type="text"/><br/>

                         <label className="login_main_form_section_label" for="types">Aantal pakkettypes</label>
                        <select onChange={this.onSearch} id="cars" name="cars">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <section id="pakketNamen">
                            <input required id="1" type="text" className="pakketNaamInput"  onChange={this.saveTypes} name="types"/>
                        </section>

                        <button className="login_main_form_button" type="submit"> Verzend</button>

                </form>
            </main>
           
        );
    }
}

export default Admin;