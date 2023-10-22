import React, { useState, useEffect } from 'react';
import classes from "./EmailItem.module.css";
import Card from '../UI/Card';

const EmailItem = ({ email, name, id, subject, description, }) => {
    const initialTimestamp = 1582726505000;
    const [timestamp] = useState(initialTimestamp);
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const convertTimestampToFormattedDate = () => {
            const timestampInSeconds = timestamp / 1000;
            const date = new Date(timestampInSeconds);
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based, so add 1
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
            const formattedDate = `${day}/${month}/${year} ${hours % 12}:${String(minutes).padStart(2, '0')}${ampm}`;
            setFormattedDate(formattedDate);
        };

        convertTimestampToFormattedDate();
    }, [timestamp]);

    let emailContent = `<${email}>`
    //console.log(date)
    let circleContent = name.toUpperCase(); //To convert Upper Case;
    //console.log(circleContent)
const idHandler = () =>{
    console.log(id)

}

    return (
        <li className={classes.item} onClick={idHandler}>
            <Card>
                <div className={classes.flex}>
                    <div className={classes.circle}>
                        {circleContent[0]}
                    </div>
                    <div>
                        <header>
                            <h3>From : {name} {emailContent} </h3>
                            <h3>Subject : {subject}</h3>

                        </header>
                        <p>{description}</p>
                        <div className={classes.actions}>
                            <p>{formattedDate}</p>
                            <button >{id}</button>
                        </div>

                    </div>

                </div>


            </Card>
        </li>
    );
}


export default EmailItem
