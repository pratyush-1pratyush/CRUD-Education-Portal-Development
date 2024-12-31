// api/users.js

const data = {
    credentials: [
        {
            "username": "Ayushi",
            "password": "Ishappy@123",
            "id": "a208"
          },
          {
            "username": "Ishu",
            "password": "happy@123",
            "id": "998c"
          },
          {
            "username": "Happy",
            "password": "Ishu@123",
            "id": "ec5e"
          },
          {
            "username": "puneet@123",
            "password": "Ayushi@123",
            "id": "c837"
          }
    ],
    users: [
        {
            "names": "Ishu",
            "username": "Ishu@567",
            "gender": "Female",
            "emailId": "as4390796@gmail.com",
            "contact": "8675432456",
            "id": "9"
          },
          {
            "names": "Tanu",
            "username": "Tanu@123",
            "gender": "Female",
            "emailId": "as4390796@gmail.com",
            "contact": "8675432456",
            "id": "10"
          },
          {
            "names": "Ram kumar",
            "username": "Ram@123",
            "gender": "",
            "emailId": "as4390796@gmail.com",
            "contact": "8800480897",
            "Images": "",
            "": "Male",
            "id": "2dfc"
          },
          {
            "id": "3f4c",
            "names": "Akanksha",
            "username": "Akanksha@123",
            "gender": "",
            "emailId": "as4390796@gmail.com",
            "contact": "8800480897",
            "Images": "",
            "": "Female"
          },
          {
            "id": "b1ed",
            "names": "HAappy",
            "username": "Happy@123",
            "gender": "",
            "emailId": "as4390796@gmail.com",
            "contact": "8800480897",
            "Images": "",
            "": "Female"
          },
          {
            "id": "9ed3",
            "names": "ishan kashyap",
            "username": "isone@123",
            "gender": "",
            "emailId": "as4390796@gmail.com",
            "contact": "8800480897",
            "Images": ""
          },
          {
            "id": "ec68",
            "names": "anshu tiwari",
            "username": "anshu@1234",
            "gender": "",
            "emailId": "as4390796@gmail.com",
            "contact": "8800480897",
            "Images": "",
            "": "Male"
          }
    ]
  };
  
  export default function handler(req, res) {
    // Set CORS headers to allow cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*');  // Allow all origins or specify your frontend URL (e.g., 'https://crud-education-portal-development-nine.vercel.app')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    if (req.method === 'DELETE') {
        const { id } = req.query;  // Get the user ID from the query parameters
        if (!id) {
          return res.status(400).json({ message: "ID is required" });
        }
    
        // Find the user and remove it
        const userIndex = data.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
          return res.status(404).json({ message: "User not found" });
        }
    
        // Remove the user from the array
        data.users.splice(userIndex, 1);
    
        // Return the updated list of users
        return res.status(200).json({ message: "User deleted successfully", users: data.users });
      }

      if (req.method === 'PUT') {
        const { id } = req.query;  // Get the user ID from the query parameters
        const { names, username, gender, emailId, contact, Images } = req.body;  // Get the updated user details from the body
    
        if (!id) {
          return res.status(400).json({ message: "ID is required" });
        }
    
        // Find the user and update their details
        const userIndex = data.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
          return res.status(404).json({ message: "User not found" });
        }
    
        // Update the user details
        data.users[userIndex] = { ...data.users[userIndex], names, username, gender, emailId, contact, Images };
    
        // Return the updated user or list of users
        return res.status(200).json({ message: "User updated successfully", user: data.users[userIndex] });
      }

      if (req.method === 'POST') {
        const { names, username, gender, emailId, contact, Images } = req.body;
    
        // Validate required fields
        if (!names || !username || !emailId || !contact) {
          return res.status(400).json({ message: "Missing required fields" });
        }
    
        // Generate a new user ID (you can improve this part with unique ID generation logic)
        const newUser = {
          id: Math.random().toString(36).substring(7), // Random string as ID (example)
          names,
          username,
          gender,
          emailId,
          contact,
          Images,
        };
    
        // Add the new user to the users array
        data.users.push(newUser);
    
        // Return the newly created user
        return res.status(201).json({ message: "User created successfully", user: newUser });
      }
    
  
    // Return the data
    res.status(200).json(data);
  }