import React from 'react'
import { FaRegThumbsUp,FaRegCommentAlt,FaShareAlt } from 'react-icons/fa';

const ShowPost = () => {
    const[state , setState] = React.useState([
        {id:1,
            userImg:"/images/miltryforce.jpg",
            name:"Mangle patil",
            time:"22h",
            text:"The team has won five major ICC tournaments, winning the Cricket World Cup twice 1983 and 2011,\ the ICC T20 World Cup once 2007  and the ICC Champions Trophy twice 2002 and 2013 and have also finished as runners-up in the World Cup once 2003, the T20 World Cup once 2014",
            postImg:'/images/india1.jpg'
    },

        {id:2,
        userImg:"/images/India.jpg",
        name:"Yogesh Ghait",
        time:"16h",
        text:"Shivaji, also spelled Śivaji, (born February 19, 1630, or April 1627, Shivner, Poona [now Pune], India—died April 3, 1680, Rajgarh), founder of the Maratha kingdom of India. The kingdom's security was based on religious toleration and on the functional integration of the Brahmans, Marathas, and Prabhus.",
        postImg:'/images/jaynti2023.jpg'
    },
        {id:3,
            userImg:"/images/Gajanan1.jpg",
            name:"Nilesh Ghait",
            time:"21h",
            text:"Buddha, (Sanskrit: “Awakened One”) clan name (Sanskrit) Gautama or (Pali) Gotama, personal name (Sanskrit) Siddhartha or (Pali) Siddhattha, (born c. 6th 4th century BCE, Lumbini, near Kapilavastu, Shakya republic, Kosala kingdom [now in Nepal]—died, Kusinara, Malla republic, Magadha kingdom [now Kasia, India]), the founder of Buddhism, one of the major religions and philosophical systems of southern and eastern Asia and of the world. Buddha is one of the many epithets of a teacher who lived in northern India sometime between the 6th and the 4th century before the Common Era.",
            postImg:'/images/Lord Buddha.jpg'},
        {id:4,
            userImg:"/images/India4.jpg",
            name:"Jagan patil",
            time:"12h",
            text:"Mughal emperor Shah Jahan built the Jama Masjid between 1650 and 1656, at the highest point of Shahjahanabad. The mosque was designed by Ustad Ahmad Lahori, who died in 1649 before its construction started. Afterwards it was completed by the architect Ustad Khalil, and constructed by approximately 5000 workers.",
            postImg:'/images/delhi.jpg'
    },
    ]);
  return (
    <div className='show'>
        
        {state.map((post) => (
        <div key={post.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {post.name} <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              <img src={post.postImg} alt="post" />
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text">Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;