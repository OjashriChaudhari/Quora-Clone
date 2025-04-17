import React, { useContext, useState } from 'react'
import newPostContext from './useContext';
import './createPost.css'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const CreatePost = () => {
        const[newPostData , setNewPostData] = useState({
            userimg: "",
            name: "",
            heading: "",
            imageUrl: "",
            description:"",
        });
        
        const {setAllPost, allPost}= useContext(newPostContext);
        
        const navigate = useNavigate();

        const handleChanges =(h)=>{
            const{name,value}=h.target;
            setNewPostData({...newPostData, [name]:value});
        };

        const handleSubmit = (event) => {
            event.preventDefault(); 
            const finalPostData = {
                ...newPostData,
                userimg: newPostData.userimg.trim() === ''
                  ? 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740' //  default image URL
                  : newPostData.userimg,
              };
            
            setAllPost([...allPost,finalPostData]);
            // console.log("New Post Data:", newPostData);
            alert("Post Created Successfully!");
            // console.log("All Posts After Add:",allPost)
            navigate('/')
          };

  return (
 <>
    <NavBar/>
    <div className='create-post'>
        <form onSubmit={handleSubmit}>
            <label>UserImage</label>
            <input
            type='text'
            name='userimg'
            value={newPostData.userimg}
            onChange={handleChanges}
            />
           

            <label>Name</label>
            <input
            type='text'
            name='name'
            value={newPostData.name}
            onChange={handleChanges}
            />

            <label>Heading</label>
            <input
            type='text'
            name='heading'
            value={newPostData.heading}
            onChange={handleChanges}
            />

            <label>ImageUrl</label>
            <input
            type='text'
            name='imageUrl'
            value={newPostData.imageUrl}
            onChange={handleChanges}
            />

            <label>Description</label>
            <input
            type='text'
            name='description'
            value={newPostData.description}
            onChange={handleChanges}
            />

            <button type='submit'>Post</button>

        </form>
    </div>
 </>
  )
}

export default CreatePost
