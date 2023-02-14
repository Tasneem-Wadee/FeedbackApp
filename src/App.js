import { useState } from 'react'
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from './components/FeedbackList';

function App() {
  const title = "Blog Post";
  const body = " Hello from the app component ";

  const comments = [
    { id: 1, text: "comment nr 1" },
    { id: 2, text: "comment nr 2" },
    { id: 3, text: "comment nr 3" }
  ];

  const loading = false;
  const showComments = true;

  const commentBlock = (
    <div className="comments">
      <h3> Number of Comments: {comments.length} </h3>

      <ul>
        {comments.map((comments, index) => (
          //unique key prop for each child (like an atribute)
          <li key={index}>{comments.text}</li>
        ))}
      </ul>
    </div>
  );
  if (loading) return <p> loading...</p>;




const[feedback, setFeedback] = useState(FeedbackData)








  //when and why do we need state
  //global state when multiple components need to access sone data








  return (
    // orrr empty fragments instead of div tags <> </>
    //to use conditional, we need turnery operator

    <>
      <Header text="Newbie " />

      <div className="container">
        
        <h1> {title} </h1>
        <p> {body} </p>

        {/* && can replace where the ? is - how is each of these operators determining
      whether or not this statement is true
      
      if showComments is true, show comments else don't show anything*/}
        {showComments ? commentBlock : null}
      </div>

      <FeedbackList feedback={feedback} />
    </>
  );
}

export default App;
