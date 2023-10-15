import React, { useState, ChangeEvent } from 'react';
import TitleComponent from '../components/TitleComponent'

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
};

const BlogPreview: React.FC<{ blogData: BlogData }> = ({ blogData }) => {
    const { titleTop, bodyTop, titleSecond, bodySecond, titleThird, bodyThird, shopInfo, author } = blogData;
    
    return (
        <div style={{ width: '85%', paddingLeft: '40px' }}>
            <div
                style={{
                    height: '75%',
                    width: '75%',
                    marginLeft: '40px',
                }}
            >
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '8vh',
                }}
                >
                    <TitleComponent title={titleTop ? titleTop : "Default Title"} textColor="#4d4336" />
                </div>
                <img
                    src={
                        blogData.imageTop
                        ? URL.createObjectURL(blogData.imageTop)
                        : "/images/cheese.jpg"
                    }
                    alt="Blog Image Preview"
                    style={{ width: '100%', height: 'auto', marginLeft: '5px' }}
                />
            </div>
            <div
                style={{
                    maxWidth: '690px',
                    height: '100%',
                    marginBottom: '80px',
                    marginTop: '20px',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                }}
            >
                <article>
                    <div style={{ marginBottom: '20px' }}>{bodyTop ? bodyTop : 'Independently owned, The Crossing is a true neighborhood pub with gorgeous interiors, a sun-drenched garden terrace, and superb staff. It still feels like a pub with locals enjoying a pint or three, but it also feels like a proper restaurant, serving up grownup food, cocktails, and a solid wine list. Whilst we perused over the menu, we tucked into a couple of those delicious and punchy cocktails.'}</div>
                    <div style={{ marginBottom: '20px' }}>{shopInfo ? shopInfo : 'Independently owned, The Crossing is a true neighborhood pub with gorgeous interiors, a sun-drenched garden terrace, and superb staff. It still feels like a pub with locals enjoying a pint or three, but it also feels like a proper restaurant, serving up grownup food, cocktails, and a solid wine list. Whilst we perused over the menu, we tucked into a couple of those delicious and punchy cocktails.'}</div>
                    <p>Written by {author ? author : 'Unknown'}</p>
                </article>
            </div>

            <div style={{ display: 'flex', marginBottom: '80px' }}>
                <div style={{ width: '60%' }}>
                    <img
                    src={
                        blogData.imageSecond
                        ? URL.createObjectURL(blogData.imageSecond)
                        : "/images/cheese.jpg"
                    }
                    alt="cheese sea"
                    style={{
                        width: '90%',
                        height: 'auto',
                    }}
                    />
                </div>
                <div style={{ width: '40%'}}>
                    <h2>{titleSecond ? titleSecond : 'Default Title Second'}</h2>
                    <div 
                        style={{ 
                            maxWidth: '690px',
                            height: '100%',            
                            marginBottom: '20px',
                            whiteSpace: 'pre-wrap',
                            wordWrap: 'break-word', 
                        }}
                    >
                        {bodySecond ? bodySecond : 'Independently owned, The Crossing is a true neighborhood pub with gorgeous interiors, a sun-drenched garden terrace, and superb staff. It still feels like a pub with locals enjoying a pint or three, but it also feels like a proper restaurant, serving up grownup food, cocktails, and a solid wine list. Whilst we perused over the menu, we tucked into a couple of those delicious and punchy cocktails.'}
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '50px' }}>
                <div style={{ width: '40%' }}>
                    <h2>{titleThird ? titleThird : 'Default Title Third'}</h2>
                    <div 
                        style={{ 
                            maxWidth: '650px',
                            marginBottom: '20px',
                            whiteSpace: 'pre-wrap',
                            wordWrap: 'break-word', 
                        }}
                    >
                        {bodyThird ? bodyThird : 'Independently owned, The Crossing is a true neighborhood pub with gorgeous interiors, a sun-drenched garden terrace, and superb staff. It still feels like a pub with locals enjoying a pint or three, but it also feels like a proper restaurant, serving up grownup food, cocktails, and a solid wine list. Whilst we perused over the menu, we tucked into a couple of those delicious and punchy cocktails.'}
                    </div>
                </div>
                <div style={{ width: '60%',}}>
                    <img
                    src={
                        blogData.imageThird
                        ? URL.createObjectURL(blogData.imageThird)
                        : "/images/cheese.jpg"
                    }
                    alt="cheese sea"
                    style={{
                        width: '90%',
                        height: 'auto',
                        marginLeft: '35px',
                    }}
                    />
                </div>
            </div>
        </div>
    );
  };
  
  export default BlogPreview;
  