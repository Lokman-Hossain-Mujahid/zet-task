import ZetBlogs from '@/components/Blog/ZetBlogs';
import React from 'react';

export const metadata = {
  title: 'Blog | Zet',
  description: 'Zet',
}

const Blog = () => {
    return (
        <div>
            <ZetBlogs/>
        </div>
    );
};

export default Blog;