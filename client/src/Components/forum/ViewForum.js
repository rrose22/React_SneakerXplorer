import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';


const ViewThread = () => {
  const { id } = 
  useParams();
  const navigate = 
  useNavigate();
  const [thread, setThread] = 
  useState(null);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/forum/view/${id}`);
        if (response.ok) {
          const data = await response.json();
          setThread(data);
        } else {
          console.error('Error fetching forum');
        }
      } catch (error) {
        console.error('Error fetching forum', error);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  const handleBack = () => {
    navigate('/forum');
  };

  return (
    <div>
        <NavBar/>
    <div style={styles.container}>
      <h2 style={styles.heading}>View Thread</h2>
      {thread ? (
        <div>
          <p><strong>Title:</strong> {thread.threadTitle}</p>
          <p><strong>Description:</strong> {thread.threadDescription}</p>
          <p><strong>Author:</strong> {thread.threadAuthor}</p>
          <p><strong>Likes:</strong> {thread.threadLikes}</p>
          <p><strong>Number of Replies: </strong> {thread.threadReplyCounter}</p>
        </div>
      ) : (
        <p style={styles.loading}>Loading Thread details...</p>
      )}
      <button onClick={handleBack} style={styles.backButton}>Back</button>
    </div>
    </div>
  );
};

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
      color: '#000000', 
      marginBottom: '20px',
    },
    addButton: {
      backgroundColor: '#FFA500', 
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
    viewButton: {
      backgroundColor: '#4169E1', 
      color: '#FFFFFF',
      padding: '10px 16px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
      marginRight: '8px',
    },
    updateButton: {
      backgroundColor: '#32CD32', 
      color: '#FFFFFF',
      padding: '10px 16px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
      marginRight: '8px',
    },
    deleteButton: {
      backgroundColor: '#FF6347', 
      color: '#FFFFFF',
      padding: '10px 16px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };
  

export default ViewThread;
