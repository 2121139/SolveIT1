// // api/admin/fetchUsers.js

// import dbConnect from "@/utils/dbConnect";
// import { User } from '@/models/User';
// import { getSession } from 'next-auth/react';

// export default async function handler(req, res) {
//   // Check if the user is an admin
//   const session = await getSession({ req });
//   if (!session || session.user.role !== 'admin') {
//     return res.status(403).json({ message: 'Access denied' });
//   }

//   await dbConnect();

//   try {
//     // Fetch all users from the database
//     const users = await User.find().populate('User').exec();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching users', error });
//   }
// }



import dbConnect from '../../../utils/dbConnect'; // Adjust path as needed
import { User } from '../../../models/User'; // Adjust path as needed

export default async function handler(req, res) {
  await dbConnect();

  try {
    const users = await User.find({}).populate('userInfo'); // Fetch users and populate userInfo
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}

