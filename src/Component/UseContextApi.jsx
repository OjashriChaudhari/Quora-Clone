import React, { useState } from 'react'

import newPostContext from './useContext'

const UseContextApi = ({children}) => {
     const x=[
          {
              userimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2v3_tUUjT6M5ZJOcRITGl5H-5-0dcqLmtQ&s",
              name:"Castrol",
              heading: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
              imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Castrol_logo_2023.svg/2560px-Castrol_logo_2023.svg.png",
              description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quo dolorum illo officiis illum, est at ratione ipsum fugit! Sequi voluptatem laboriosam id molestias odit eius cum eaque non nobis. Dicta, libero dolorem possimus omnis est a hic accusantium maiores adipisci minima perspiciatis ipsa, at aliquam, quibusdam ut iure sint?Sequi voluptatem laboriosam id molestias odit eius cum eaque non nobis. Dicta, libero dolorem possimus omnis est a hic accusantium maiores adipisci minima perspiciatis ipsa",
          },
  
          {
              userimg: "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
              name: "Gaurav Yadav",
              heading: "What is the best way to learn Financial modelling",
              imageUrl: "https://iimskills.com/wp-content/uploads/2022/05/Best-Practices-Of-Financial-Modeling.png",
              description: "After completing my CA exams, I realized that I was missing out on a crucial skill—financial modeling. I enrolled in Quintedge’s course, but at first, I was frustrated with Excel shortcuts and formulas. There was one assignment where I failed to link my cash flow statement with the income statement properly, and I couldn’t figure out why my model was wrong. I almost gave up, but then I decided to rewatch the lessons, took extra notes, and eventually figured it out. That victory, after so much frustration, felt like a huge milestone. Now, financial modeling is an integral part of my job, and I even got promoted within six months of applying these new skills to real client projects."
              
          },
  
          {
              userimg: "https://static.vecteezy.com/system/resources/previews/002/800/316/non_2x/game-zone-neon-signs-style-text-free-vector.jpg",
              name: "Vijay's Gaming Zone",
              heading: "Which smartphone are best for mobile gaming in 2025",
              imageUrl: "https://qph.cf2.quoracdn.net/main-qimg-8f88be160b5cdb4c88c1979bd0499b66",
              description: " Snapdragon 8 Elite processor with 24GB RAM delivers ultra-fast performance.185Hz AMOLED Display ensures ultra-smooth gameplay 5,800mAh battery with 65W fast charging keeps you playing longeDual front-facing speakers with Dirac Virtues sound system- provide 3D spatial audio."
          }
      ];

//    const[newPost , setNewPost] = useState(null)
   const[allPost , setAllPost] = useState(x)

  return (
   <newPostContext.Provider value={{allPost,setAllPost}}>
        {children}
        
   </newPostContext.Provider>
   
  );
};

export default UseContextApi
