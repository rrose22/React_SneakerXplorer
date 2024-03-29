import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar';


function ViewThreads() {
  const [threadsList, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async() =>{
      try {
        const response = await fetch('http://localhost:3001/api/forum/view');
        if (response.ok) {
          const data = await response.json();
          setThreads(data);
        } else {
          console.error('Error fetching Threads');
        }
      } catch (error) {
        console.error('Error fetching Threads:', error);
      }
    };
    
    fetchThreads();
  
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/forum//deleteThread/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedList = threadsList.filter((thread) => thread._id !== id);
        setThreads(updatedList);
      } else {
        console.error('Error deleting Thread');
      }
    } catch (error) {
      console.error('Error deleting Thread:', error);
    }
  };


  return (
    <div>
    <NavBar/>
    <div style={styles.container}>
    <h2 style={styles.heading}>Thread List</h2>
      <Link to="/forum/createForum">
        <button style={styles.addButton}>Create Thread</button>
      </Link>
      <table style={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th style={styles.descriptionColumn}>Description</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {threadsList.map(thread => (
              <tr key={thread._id}>
                <td>{thread.threadTitle}</td>
                <td>{thread.threadDescription}</td>
                <td>{thread.threadAuthor}</td>
                <td>
                <Link to={`/forum/view/${thread._id}`}>
                  <button style={styles.viewButton}>View</button>
                </Link>
                <Link to={`/forum/updateThread/${thread._id}`}>
                  <button style={styles.updateButton}>Update</button>
                </Link>
                <button onClick={() => handleDelete(thread._id)} style={styles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '60%',
    margin: 'auto',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  heading: {
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: '20px',
  },
  addButton: {
    backgroundColor: '#FF0000',
    color: '#FFFFFF',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  // Adjusted column widths
  descriptionColumn: {
    width: '50%', // Adjust as needed
  },
  viewButton: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '8px',
  },
  updateButton: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '8px',
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    color: '#FFFFFF',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};



export default ViewThreads;
