import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import blogItems from '../blog_components/BlogItems.json';
import Navbar from '../navbar/navbar';
import HorizontalImagedBlogPost from './blog_page_views/horizontalImaged';
import VerticalImagedBlogPost from './blog_page_views/verticalImaged';

const BlogPage = () => {
    const { id } = useParams();

    const [pageType, setPageType] = useState();
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


    useEffect(() => {
        const blogItem = blogItems.find(item => item.id === parseInt(id, 10));

        if (blogItem) {
            determineImageDimensions(blogItem.image)
                .then(message => {
                    console.log(message);
                });
        }
    }, [id]);


    const blogItem = blogItems.find(item => item.id === parseInt(id, 10));

    console.log(blogItem);

    return (
        <>
            <Navbar title={blogItem.title.split('.')[0]} />
            {pageType === "verticalImaged" ?
                <VerticalImagedBlogPost blogData={blogItem} />
                :
                <HorizontalImagedBlogPost blogData={blogItem}  />
            }

        </>
    );
};

export default BlogPage;
