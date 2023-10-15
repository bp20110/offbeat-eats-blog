import React, { useState, ChangeEvent } from 'react';
import BlogPreview from './BlogPreview';
import InputCard from './InputCard';
import { useNavigate } from 'react-router-dom';

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

const BlogCreate: React.FC = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const [blogData, setBlogData] = useState<BlogData>({
    titleTop: '',
    bodyTop: '',
    titleSecond: '',
    bodySecond: '',
    titleThird: '',
    bodyThird: '',
    shopInfo: '',
    imageTop: null,
    imageSecond: null,
    imageThird: null,
    author: '',
  });

  const handleSubmit = () => {
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blogData)
    }).then(() => {
        setIsPending(false);
        navigate('/');
    })
}

  const handleTitleTopChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBlogData({ ...blogData, titleTop: e.target.value });
  };

  const handleBodyTopChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBlogData({ ...blogData, bodyTop: e.target.value });
  };

  const handleTitleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBlogData({ ...blogData, titleSecond: e.target.value });
  };

  const handleBodySecondChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBlogData({ ...blogData, bodySecond: e.target.value });
  };

  const handleTitleThirdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBlogData({ ...blogData, titleThird: e.target.value });
  };

  const handleBodyThirdChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBlogData({ ...blogData, bodyThird: e.target.value });
  };

  const handleshopInfoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBlogData({ ...blogData, shopInfo: e.target.value });
  };

  const handleImageTopChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBlogData({ ...blogData, imageTop: e.target.files[0] });
    }
  };

  const handleImageSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBlogData({ ...blogData, imageSecond: e.target.files[0] });
    }
  };

  const handleImageThirdChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBlogData({ ...blogData, imageThird: e.target.files[0] });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
            {/* ブログプレビュー */}
            <div style={{ 
                width: '70%', 
                border: '4px solid white', 
                padding: '10px', 
                margin: '20px', 
                }}
            >
                <BlogPreview blogData={blogData} />
            </div>
            {/* ブログ作成フォーム */}
            <div style={{ width: '30%', margin: '20px'}}>
                <InputCard 
                    blogData={blogData}
                    handleTitleTopChange={handleTitleTopChange}
                    handleBodyTopChange={handleBodyTopChange}
                    handleTitleSecondChange={handleTitleSecondChange}
                    handleBodySecondChange={handleBodySecondChange}
                    handleTitleThirdChange={handleTitleThirdChange}
                    handleBodyThirdChange={handleBodyThirdChange}
                    handleshopInfoChange={handleshopInfoChange}
                    handleImageTopChange={handleImageTopChange}
                    handleImageSecondChange={handleImageSecondChange}
                    handleImageThirdChange={handleImageThirdChange}
                    handleSubmit={handleSubmit}
                    isPending={isPending}
                />
            </div>
        </div>
      </form>
    </div>
  );
};

export default BlogCreate;
