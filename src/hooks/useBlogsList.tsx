import { useEffect, useState } from 'react';
import { getBlogsList } from '../services';
import { BlogItem } from '../types/BlogsListing.type';

const useBlogsList = (): [boolean, BlogItem[]] => {

  const [blogsData, setBlogsData] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

  return [loading, blogsData];
}

export default useBlogsList;