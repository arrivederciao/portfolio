import React from 'react';
import Navbar from '../navbar/navbar';
import '../../assets/Blog.css';
import testImage from '../../assets/media/profile.jpg';
import blogItems from '../blog_components/BlogItems.json';
import { useNavigate } from 'react-router-dom';
const Blog = () => {

  const navigate = useNavigate();
  const columnCount = 3;

  const navigateToBlogPage = (id) => {
    // Navigating to the "/blog/page/:id" route and passing the id as state
    navigate(`/blog/page/${id}`);
  };
  

  const generateColumns = () => {
    return Array.from({ length: columnCount }, (_, columnIndex) => (
      <div key={columnIndex} className={`blog-column blog-column-${columnIndex}`}>
        {generateColumnItems(columnIndex)}
      </div>
    ));
  };

  const generateColumnItems = (columnIndex) => {
    const itemsInColumn = blogItems.filter((_, index) => index % columnCount === columnIndex);

    return itemsInColumn.map((itemData, itemIndex) => {

      let truncatedDescription = itemData.description;

      if (itemData.description.length > 100) {
        const lastSpaceIndex = itemData.description.lastIndexOf(' ', 100);
        truncatedDescription = lastSpaceIndex !== -1
          ? itemData.description.slice(0, lastSpaceIndex) + '...'
          : itemData.description.slice(0, 100) + '...';
      }
      return (
        <div
          key={itemIndex}
          className={`blog-column-item`}
          onClick={() => { navigateToBlogPage(itemData.id)}}
          >
          <img src={itemData.image}  alt="Image" loading='lazy'/> 

          <div className="blog-column-item-data">
            <div className="blog-column-item-title">
              {itemData.title || 'Hello'}
            </div>
            <div className="blog-column-item-description">
              {truncatedDescription || 'Hello'}
            </div>

          </div>


        </div>
      );
    });

  };

  return (
    <>
      <Navbar title={'Elif Metin'} />
      <div className='blog-container'>
        <div className='blog-column-container'>{generateColumns()}</div>
      </div>



    </>
  );
};

export default Blog;
