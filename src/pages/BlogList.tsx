import React from 'react';
import RecipeReviewCard from '../components/RecipeReviewCard';

type BlogData = {
    titleTop: string;
    bodyTop: string;
    titleSecond: string;
    bodySecond: string;
    titleThird: string;
    bodyThird: string;
    shopInfo: string;
    imageTop: File | null;
    imageSecond: File | null;
    imageThird: File | null;
    author: string;
    id: number;
};

const BlogList: React.FC<{blogs: BlogData[]}> = ({blogs}) => {

    return ( 
        <>
            {blogs.map(blog => (
                <div 
                    key={blog.id} 
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        margin: '30px 0',
                      }}                      
                >
                    <RecipeReviewCard blog={blog}/>
                </div>
            ))}
        </>
     );
}

export default BlogList;