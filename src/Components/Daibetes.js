import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Imag11 from "./66.jpeg";
import Imag12 from "./77.png";
import Imag13 from "./44.jpeg";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from './Firebase-Config';

const Diabetes = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replies, setReplies] = useState({});
  const [showReplyForm, setShowReplyForm] = useState(null);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showParagraph2, setShowParagraph2] = useState(false);
  const [showParagraph3, setShowParagraph3] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const db = getFirestore(app);
  const [data, setData] = useState({
    comment: '',
    
  });
  const commentsRef = collection(db, 'DiaComment');

  const handleInputs = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleShowParagraph = () => {
    setShowParagraph(true);
  };

  const handleShowParagraph2 = () => {
    setShowParagraph2(true);
  };

  const handleShowParagraph3 = () => {
    setShowParagraph3(true);
  };

  const handleHideParagraph = () => {
    setShowParagraph(false);
    setShowParagraph2(false);
    setShowParagraph3(false);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const commentData = {
      text: newComment,
      timestamp: new Date().toISOString()
    };
    try {
      const docRef = await addDoc(commentsRef, commentData);
      setComments([...comments, { id: docRef.id, ...commentData }]);
      setNewComment("");
      setShowCommentBox(false);
    } catch (err) {
      console.error("Error adding comment to Firestore: ", err);
    }
  };

  const handleReplySubmit = (event, commentIndex) => {
    event.preventDefault();
    const newReplies = { ...replies };
    newReplies[commentIndex] = [
      ...(replies[commentIndex] || []),
      { text: event.target.reply.value },
    ];
    setReplies(newReplies);
    setShowReplyForm(null);
  };

  const handleRetrieveComments = async () => {
    try {
      const querySnapshot = await getDocs(commentsRef);
      const fetchedComments = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setComments(fetchedComments);
    } catch (err) {
      console.error("Error fetching comments from Firestore: ", err);
    }
  };

  return (
    <div className="container-dia">
      <div className="cd">
      <br></br><br></br>
        <h3 className="mnd">The 5 symptoms of diabetes</h3>

        <p className="od">
          <br></br><br></br><br></br>
          <h5>1. Extreme hunger</h5>
        </p>
        <p className="od">
          <h5>2. Extreme thirst</h5>
        </p>
        <p className="od">
          <h5>3. Needing to pee a lot</h5>
        </p>
        <p className="od">
          <h5>4. Exhaustion</h5>
        </p>
        <p className="od">
          <h5>5. Blurry vision</h5>
        </p>
      </div>
      <main>
        <div className="button-container">
          <div>
            <button className="bnd2" onClick={handleShowParagraph}>
              LowSugar
            </button>
            {showParagraph && (
              <div>
                <p className="clored-dia2">Give them something sweet</p>
                <button className="bnd2" onClick={handleHideParagraph}>
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div>
<button className="bnd2" onClick={handleShowParagraph2}>
              HighSugar
            </button>
            {showParagraph2 && (
              <div>
                <p className="clored-dia2">
                  Should See Doctor
                </p>
                <button className="bnd2" onClick={handleHideParagraph}>
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div>
            <button className="bnd2" onClick={handleShowParagraph3}>
            unconscious
            </button>
            {showParagraph3 && (
              <div>
                <p className="clored-dia2">
                 Do not give them anything by mouth.
                 <br></br>
                 And seek emergency medical attention.
                </p>
                <button className="bnd2" onClick={handleHideParagraph}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
        <br></br>
        <div className="card">
          <div className="card-header">
            <h4>Comments</h4>
          </div>
          <div className="card-body">
            {comments.map((comment, index) => (
              <div key={comment.id}>
                <p>{comment.text}</p>
                {replies[index] &&
                  replies[index].map((reply, replyIndex) => (
                    <p key={replyIndex} className="ml-5">
                      {reply.text}
                    </p>
                  ))}
                {!showReplyForm && (
                  <button
                    className="bnd2"
                    onClick={() => setShowReplyForm(index)}
                  >
                    Reply
                  </button>
                )}
                {showReplyForm === index && (
                  <form
                    onSubmit={(event) => handleReplySubmit(event, index)}
                    className="mt-3 ml-5"
                  >
                    <div className="form-group">
                      <textarea
                        name="reply"
                        className="form-control"
                        placeholder="Type your reply here..."
                        required
                      />
                    </div>
                    <button type="submit" className="bnd2">
                      Submit
                    </button>
                  </form>
                )}
              </div>
            ))}
            {!showCommentBox && (
              <button
                className="bnd2"
                onClick={() => setShowCommentBox(true)}
              >
                Add a comment
              </button>
            )}
            {showCommentBox && (
              <form onSubmit={handleCommentSubmit} className="mt-3">
                <div className="form-group">
                  <textarea
                    name="comment"
                    className="form-control"
                    placeholder="Type your comment here..."
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="bnd2">
                  Submit
                </button>
              </form>
            )}
            <br></br><br></br>
            <button
              className="bnd2"
              onClick={handleRetrieveComments}
            >
              Retrieve Comments
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Diabetes;