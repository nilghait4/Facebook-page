import React from 'react'

const ChatBar = (props) => {
    const[state,setState] = React.useState([
        {id:1 , image:'images/Gajanan1.jpg',name:"Ganesh Ghait"},
        {id:2 , image:'images/india.jpg',name:"amit roy"},
        {id:3 , image:'images/kishor patil.jpg',name:"Dhiraj shukla"},
        {id:4 , image:'images/miltryforce.jpg',name:"prashant goyal"},
        {id:5, image:'images/vijay.jpg',name:"yogesh Ghait"},
        {id:6 , image:'images/virat.jpg',name:"Om parthav"},
        {id:7 , image:'images/vishal.jpg',name:"Rajkumar Bansal"},
        {id:8 , image:'images/india2.jpg',name:"Raheman bilal"},
        {id:9 , image:'images/india3.jpg',name:"Nilesh patil"},
        {id:10 , image:'images/india4.jpg',name:"Amar govrdhan"},
        {id:11 , image:'images/State1.jpg',name:"bansale"},
        {id:12, image:'images/State3.jpg',name:"Vinay patil"},
        {id:13 , image:'images/State2.jpg',name:"goapal govrdhan"},
        {id:14 , image:'images/State4.jpg',name:"bansale"},
        {id:15, image:'images/Sandeep.jpg',name:"Sandeep patil"},
        {id:16 , image:'images/TATA.jpg',name:"Ambani sir"},
        

    ]);
    const openChat = (user) => {
      props.openChat(user);
    };
    return (
      <div className="chatBar">
        {state.map((user) => (
          <div
            className="chatBar__list"
            key={user.id}
            onClick={() => openChat(user)}
          >
            <div className="chatBar__list-img">
              <img src={user.image} alt="user" />
              <span className="status"></span>
            </div>
            <div className="chatBar__list-name">{user.name}</div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ChatBar;