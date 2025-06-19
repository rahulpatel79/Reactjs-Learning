import React from 'react'
import InlineCssInReactJs from './InlineCssInReactJs';

function TaskCardData()  {
const testData = [
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Rahul Patel', position: 'Software Developer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Anjali Sharma', position: 'Frontend Developer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Rohit Verma', position: 'Backend Developer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Sneha Joshi', position: 'UI/UX Designer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Vikram Mehta', position: 'Project Manager' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Priya Desai', position: 'QA Engineer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Amit Kapoor', position: 'DevOps Engineer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Meera Nair', position: 'Data Analyst' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Karan Bhatia', position: 'Mobile Developer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Neha Singh', position: 'Cloud Architect' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Arjun Das', position: 'AI Engineer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Pooja Reddy', position: 'Machine Learning Engineer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Siddharth Iyer', position: 'Product Owner' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Divya Chauhan', position: 'Business Analyst' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Nikhil Rao', position: 'Scrum Master' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Tanvi Kulkarni', position: 'Technical Writer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Harsh Vyas', position: 'Security Analyst' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Kavita Goyal', position: 'Database Administrator' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Rakesh Yadav', position: 'Network Engineer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Shreya Bhatt', position: 'Software Tester' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Manish Thakur', position: 'Systems Analyst' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Ishita Saxena', position: 'Software Architect' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Aarav Jain', position: 'Full Stack Developer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Simran Kaur', position: 'Technical Support Engineer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Yash Malhotra', position: 'Web Developer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Isha Mehra', position: 'Blockchain Developer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Saurabh Tiwari', position: 'Embedded Systems Engineer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Ritika Anand', position: 'ERP Consultant' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Ankit Joshi', position: 'Data Engineer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Lavanya Menon', position: 'Data Scientist' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Mohit Khanna', position: 'Game Developer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Tushar Agarwal', position: 'Technical Recruiter' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Payal Mishra', position: 'Business Development Executive' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Gaurav Chhabra', position: 'IT Consultant' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Sanya Kapoor', position: 'SEO Specialist' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Aditya Prasad', position: 'Content Strategist' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Naina Rathi', position: 'Research Analyst' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Kunal Sethi', position: 'Application Support Analyst' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Bhavya Arora', position: 'AI Researcher' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Rajeev Nanda', position: 'System Administrator' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Trisha Balan', position: 'IT Auditor' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Devendra Chauhan', position: 'Platform Engineer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Pallavi Shah', position: 'Business Intelligence Analyst' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Rahul Nair', position: 'Cloud Engineer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Zoya Merchant', position: 'IT Support Specialist' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Sahil Rawat', position: 'Site Reliability Engineer' },
  { img: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Ananya Pillai', position: 'Digital Transformation Lead' },
];


  return (
    <>
    <InlineCssInReactJs testData={testData} />
      
    </>
  )
}

export default TaskCardData
