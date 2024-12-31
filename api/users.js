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

  // Return the data
  res.status(200).json(data);
}
  
 
  
