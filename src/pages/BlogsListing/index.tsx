import React, { useState } from 'react';
import Blogs from '../../components/Blogs';
import BlogDetail from '../../components/BlogDetail';
import { BlogItem } from '../../types/BlogsListing.type';
import useBlogsList from '../../hooks/useBlogsList';

export default function BlogsListing() {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | undefined>(); // Initialize with undefined for clarity
  const [loading, blogsData] = useBlogsList()
  
  return (
    <>
      {loading ? (
        <div data-testid='loader' className='loader'></div>
      ) : (
        <div className='home'>
          <Blogs blogs={blogsData} setSelectedBlog={setSelectedBlog} />
          {selectedBlog && <BlogDetail selectedBlog={selectedBlog} />}
        </div>
      )}
    </>
  );
}
