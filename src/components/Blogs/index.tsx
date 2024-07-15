import React from 'react';
import { blogListProps } from '../../types/BlogsListing.type';

export default function Blogs({ blogs, setSelectedBlog }: blogListProps) {
  return (
    <div className='posts'>
      {blogs?.map((item) => {
        return (
          <div
            key={item.id}
            className='post'
            onClick={() => setSelectedBlog(item)}
          >
            {item.media?.length ? (
              <img
                className='postImg'
                src={item.media[0]['media-metadata'][1].url}
                alt=''
              />
            ) : null}
            <div className='postInfo'>
              <span className='postCat'>
                <span className='link'>{item.type}</span>
              </span>
              <span className='postTitle'>
                <span className='link'>{item.title}</span>
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
