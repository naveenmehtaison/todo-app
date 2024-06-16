import React from 'react'
const { MongoClient } = require('mongodb');

export async function handler(req,res) {
    if(req.method=='POST'){
        const data = req.body
        // const {title,image,address,description}=data
        const client = await MongoClient.connect('mongodb+srv://naveenmehta099:naveenmehta099@todo.hdfdlyr.mongodb.net/?retryWrites=true&w=majority&appName=Todo')
        const db = client.db()
        const meetupscollection = db.collection('newtasak')
        const result = await meetupscollection.insertOne(data)
        console.log(result)
        client.close()
        res.status(201).json({message})


    }
}

export default handler