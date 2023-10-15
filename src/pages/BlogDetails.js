import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
import React from 'react';
import TitleComponent from '../components/TitleComponent'

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate(); 

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        });
    }

    let imageUrlTop = '/images/cheese.jpg';
    let imageUrlSecond = '/images/cheese.jpg';
    let imageUrlThird = '/images/cheese.jpg';

    if (blog.imageTop && blog.imageTop instanceof File) {
      imageUrlTop = URL.createObjectURL(blog.imageTop);
    }

    if (blog.imageSecond && blog.imageSecond instanceof File) {
        imageUrlSecond = URL.createObjectURL(blog.imageSecond);
    }

    if (blog.imageThird && blog.imageThird instanceof File) {
        imageUrlThird = URL.createObjectURL(blog.imageThird);
    }

    return ( 
        <div 
            style={{ 
                    minHeight: '100vh',
                    width: '70%',
                    marginTop: '20px',
                    marginLeft: '20px',
                    color: '#4d4336',
                }}
        >
            {isPending && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            <div 
                style={{
                    height: '75%',
                    width: '75%',
                    marginLeft: '100px',
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
                    <TitleComponent title={blog.titleTop} textColor="#4d4336" />
                </div>
                <img 
                    src={imageUrlTop} 
                    alt="cheese sea" 
                    style={{
                        width: '90%', 
                        height: 'auto',
                        marginLeft: '35px',
                    }}
                />
            </div>
            <div 
                style={{
                    width: '100%',
                    marginBottom: '80px',
                    marginTop: '20px',
                    marginLeft: '10px', 
                }}
            >
                <article>
                    <div style={{marginBottom: '20px'}}>{blog.bodyTop}</div>
                    <div style={{marginBottom: '20px'}}>{blog.shopInfo}</div>
                    <p>Written by {blog.author}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>              
            </div>
            <div style={{ display: 'flex', marginBottom: '80px'}}>
                <div style={{ width: '60%'}}>
                    <img 
                            src={imageUrlSecond} 
                            alt="cheese sea" 
                            style={{
                                width: '100%', 
                                height: 'auto'
                            }}
                        />
                </div>
                <div style={{ width: '40%', marginLeft: '20px'}}>
                    <h2>{blog.titleSecond}</h2>
                    <div style={{marginBottom: '20px'}}>{blog.bodySecond}</div>
                </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '80px'}}>
                <div style={{ width: '40%'}}>
                    <h2>{blog.titleThird}</h2>
                    <div style={{marginBottom: '20px'}}>{blog.bodyThird}</div>
                </div>
                <div style={{ width: '60%'}}>
                    <img 
                            src={imageUrlThird} 
                            alt="cheese sea" 
                            style={{
                                width: '100%', 
                                height: 'auto',
                                marginLeft: '20px',
                            }}
                    />
                </div>
            </div>
        </div>
     );
}

export default BlogDetails;