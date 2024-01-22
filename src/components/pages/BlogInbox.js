// ./components/pages/BlogInbox.js
// BlogInbox.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogItems from '../blog_components/BlogItems.json';
import Navbar from '../navbar/navbar';
import HorizontalImagedBlogPostInput from './blog_inputs/horizontalImagedInput';
import VerticalImagedBlogPostInput from './blog_inputs/verticalImagedInput';

const BlogInbox = () => {
    const { id } = useParams();

    const [pageType, setPageType] = useState();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const blogItem = blogItems.find(item => item.id === parseInt(id, 10));

        if (blogItem) {
            determineImageDimensions(blogItem.image)
                .then(message => {
                    console.log(message);
                });
        }
    }, [id]);

    const determineImageDimensions = (imageSrc) => {
        const image = new Image();
        image.src = imageSrc;

        return new Promise((resolve) => {
            image.onload = () => {
                const width = image.width;
                const height = image.height;

                let message;
                if (width > height) {
                    message = `Image is wide: Width ${width}, Height ${height}`;
                    setPageType("horizontalImaged");
                } else if (width < height) {
                    message = `Image is tall: Width ${width}, Height ${height}`;
                    setPageType("verticalImaged");
                } else {
                    message = `Image is square: Width ${width}, Height ${height}`;
                    setPageType("verticalImaged");
                }

                resolve(message);
            };
        });
    };

    const handleSave = () => {
        if (!title || !content) {
            alert('Please enter both title and content.');
            return;
        }

        const newBlogPost = {
            id: blogItems.length + 1, // Assuming ids are unique
            title,
            content,
            image: 'path/to/default/image.jpg', // You may want to change this
        };

        // Update the blogItems array (or save to a backend)
        // For simplicity, let's assume that blogItems is stored in memory
        blogItems.push(newBlogPost);

        // Redirect to the newly created blog post
    };

    return (
        <>
            <Navbar title="Blog Inbox" />
           

            {pageType === "verticalImaged" ?
                <VerticalImagedBlogPostInput blogData={{ title, content, image: 'path/to/default/image.jpg' }} />
                :
                <HorizontalImagedBlogPostInput blogData={{ title, content, image: 'path/to/default/image.jpg' }} />
            }
        </>
    );
};

export default BlogInbox;
