import React, { useEffect, useState } from 'react';
import Blogs from '../../components/Blogs';
import BlogDetail from '../../components/BlogDetail';
import { getBlogsList } from '../../services';
import { BlogItem } from '../../types/BlogsListing.type';

export default function BlogsListing() {
  const [blogsData, setBlogsData] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem>();

  // Effect to fetch data from the API on component mount
  useEffect(() => {
    const getData = async () => {
      const data = await getBlogsList();
      setBlogsData(data.results);
      setLoading(false);
    };

    setLoading(true);
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div className='loader'></div>
      ) : (
        <div className='home'>
          <Blogs blogs={blogsData} setSelectedBlog={setSelectedBlog} />
          {selectedBlog ? <BlogDetail selectedBlog={selectedBlog}/> : null}
        </div>
      )}
    </>
  );
}
