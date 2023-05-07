import React from 'react';

const Stories = () => {
  const [state, setState] = React.useState([
        { id: 1, image: "/images/gajanan.jpg", name: "Flutter Development" },
        { id: 2, image: "/images/India.jpg", name: "PHP Development" },
        { id: 3, image: "/images/kishor patil.jpg", name: "React Native Development" },
        { id: 4, image: "/images/Miltryforce.jpg", name: "Node JS Development" },
        
    ]);
  return (
    <div className='Stories'>
    {state.map(story =>(
        <div className='Stories__col' key={story.id}>
        <div className='Stories__body'>
            <img src={story.image} alt='Stories'/> 
            <div className='Stories__body-overlay'>
                <div className="Stories__body-overlay-image">
                    <img src={story.image} alt=''/>
                    </div>
                    <div className='Stories__body-name'>{story.name}
                    </div>
           </div> 
        </div>
    </div>

    ))}
    </div>
  );
};

export default Stories;
