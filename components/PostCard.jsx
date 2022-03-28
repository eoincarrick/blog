//React imports
import React from 'react';

//Components imports
//styles import
import css from '../styles/PostCard.module.css';

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className={css.postcardContainer}>
      <div className={css.postcardImage}>
        <img
          src={post.post_img}
          className={css.postcardImage}
          alt={post.post_title}
        />
      </div>
      <div className={css.postcardTitle}>{post.post_title}</div>
      <div className={css.postcardEx}>{post.post_ex}</div>
      <div className={css.postcardCategory}>{post.category}</div>
    </div>
  );
};

export default PostCard;
