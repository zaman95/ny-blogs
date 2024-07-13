import React from 'react';
import { blogListProps } from '../../types/BlogsListing.type';

export default function Blogs({ blogs, setSelectedBlog }: blogListProps) {
  return (
    <div className='posts'>
      {blogs?.map((item, index) => {
        return (
          <div
            key={index}
            className='post'
            onClick={() => setSelectedBlog(item)}
          >
            {item.media && item.media.length ? (
              <img
                className='postImg'
                src={item.media[0]['media-metadata'][1].url}
                alt=''
              />
            ) : null}
            <div className='postInfo'>
              <span className='postCat'>
                <a className='link'>{item.type}</a>
              </span>
              <span className='postTitle'>
                <a className='link'>{item.title}</a>
              </span>
              <hr />
              <span className='postDate'>{item.published_date}</span>
            </div>
            <p className='postDesc'>{item.abstract}</p>
          </div>
        );
      })}
    </div>
  );
}
