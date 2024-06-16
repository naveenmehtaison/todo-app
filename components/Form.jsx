// 'use client'
// import { useEffect, useState } from "react"
// const Form=()=>{
//     const [task,settask]=useState('')
//     const [time,settime] = useState('')
//     const [date,setdate] = useState('')
//     function addMeetupHandler(e) {
//         e.preventDefault()
//         console.log(task)
//         // const obj = {

//         // }
//         // try {
//         //   const response = await fetch('/api/newtask', {
//         //     method: 'POST',
//         //     body: JSON.stringify(),
//         //     headers: {
//         //       'Content-Type': 'application/json',
//         //     },
//         //   });
    
//         //   if (!response.ok) {
//         //     throw new Error('Something went wrong!');
//         //   }
    
//         //   router.push('/');
//         // } catch (error) {
//         //   console.error('Error adding meetup:', error);
    
//         // }
//       }
//     return(
//         <div >
//             <form  onSubmit={(e)=>addMeetupHandler()}className=" flex justify-between border border-black p-8 m-10 justify-center m-4 bg-yellow">
//                 <input className="border-blue-50 bg-gray-100" placeholder="what u want to do"
//                 value={task}
//                 onChange={(e)=>settask(e.target.value)}></input>
//                 <input type="date"  value={date}
//                 onChange={(e)=>setdate(e.target.value)}></input>
//                 <input type ='time' value={time}
//                 onChange={(e)=>settime(e.target.value)}></input>
//                 <button className="border-black rounded-md bg-blue-50 hover:bg-blue-500 p-2" type="submit" >Submit</button>
//             </form>
//         </div>
//     )
// }
// export default Form
'use client'

import { useState } from 'react';
// import { useRouter } from 'next/router';

const Form = () => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');


    async function addMeetupHandler(e) {
        e.preventDefault();
        console.log(task)

        const obj = {
            task,
            date,
            time,
        };

        try {
            const response = await fetch('/api/newtask', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // console.log('response ok')

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

        } catch (error) {
            console.error('Error adding meetup:', error);
        }
    }

    return (
        <div>
            <form onSubmit={addMeetupHandler} className="flex justify-between border border-black p-8 m-10 bg-yellow">
                <input
                    className="border-blue-50 bg-gray-100"
                    placeholder="What you want to do"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <button className="border-black rounded-md bg-blue-50 hover:bg-blue-500 p-2" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
