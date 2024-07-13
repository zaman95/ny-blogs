import React, { useEffect, useState } from 'react';
import Blogs from '../../components/Blogs';
import BlogDetail from '../../components/BlogDetail';
import { getBlogsList } from '../../services';
import { BlogItem } from '../../types/BlogsListing.type';

export default function BlogsListing() {
  const [blogsData, setBlogsData] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | undefined>(); // Initialize with undefined for clarity

  // Effect to fetch data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getBlogsList(); // Assume getBlogsList returns an object with a 'results' array
        setBlogsData(data.results);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the async function inside useEffect

    // Cleanup function (not needed in this case since there's no cleanup)
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
