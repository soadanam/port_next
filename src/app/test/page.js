import { database } from '@/src/mongoDB/mongoDB';
import React from 'react'

export default async function page() {
    const usersCollection = database.collection("user");
    const user = await usersCollection.findOne({});
    console.log(user);
  return (
    <div>
      user: {user.email}
      password: {user.password}
    </div>
  )
}
