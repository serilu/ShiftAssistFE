import React from 'react';
import './Admin.css';
import back from '../assets/arrow-back.svg';
import axios from "axios";
import {useState} from 'react';

const Afdeling = () => {

    const [naamAfdeling, setAfdelingnaam] = useState('');
    const [naamPakket, setPakketnaam] = useState('');



    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); // 👈️ prevent page refresh
    
        // 👇️ access input values here
        console.log('naamAfdeling 👉️', naamAfdeling);
        console.log('naamPakket 👉️', naamPakket);
    
        // 👇️ clear all input values in the form
        setAfdelingnaam('');
        setPakketnaam('');

    }
   
    const callDB = () => {


        let dbData = {}

        dbData = {
            naamAfdeling: naamAfdeling,
            pakketTypes: naamPakket,
           
            
        }

    }

        return (

            
            <main className="login_main">
             <nav className='navigation'>
                  <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                  <h1>Log In </h1>
              </nav>
                <form className="login_main_form" onSubmit={handleSubmit}>


                        <label className="login_main_form_section_label" for="afdeling">Naam Afdeling:</label>
                        <input className="login_main_form_section_input" placeholder='adfdeling naam' onChange={event=>{setAfdelingnaam(event.target.value)}} type="text" value={naamAfdeling}/><br/>

                         <label className="login_main_form_section_label" for="pakketNaam">Pakketnaam</label>
                        <section id="pakketNamen">
                            <input required id="1" type="text" className="pakketNaamInput" onChange={event=>{setPakketnaam(event.target.value)}} value={naamPakket} name="types"/>
                            <input required id="2" type="text" className="pakketNaamInput" onChange={event=>{setPakketnaam(event.target.value)}} value={naamPakket} name="types"/>
                            <input required id="3" type="text" className="pakketNaamInput" onChange={event=>{setPakketnaam(event.target.value)}} value={naamPakket} name="types"/>
                            <input required id="4" type="text" className="pakketNaamInput" onChange={event=>{setPakketnaam(event.target.value)}} value={naamPakket} name="types"/>
                        </section>

                        <button className="login_main_form_button" type="submit"> Verzend</button>

                </form>
            </main>
           
        );
    }

export default Afdeling;