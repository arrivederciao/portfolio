import React from 'react';
import Navbar from '../navbar/navbar';
import '../../assets/Blog.css';
import testImage from '../../assets/media/profile.jpg';
import blogItems from '../blog_components/BlogItems.json';

const Blog = () => {
  const columnCount = 3;

  const generateColumns = () => {
    return Array.from({ length: columnCount }, (_, columnIndex) => (
      <div key={columnIndex} className='blog-column'>
        {generateColumnItems(columnIndex)}
      </div>
    ));
  };

  const generateColumnItems = (columnIndex) => {
    const itemsInColumn = blogItems.filter((_, index) => index % columnCount === columnIndex);

    return itemsInColumn.map((itemData, itemIndex) => {
      console.log(itemData.image);
    
      return (
        <div
          key={itemIndex}
          className={`blog-column-item column-item-length-${itemData.length || 1}`}
          style={{
            backgroundImage: `url(${itemData.image ||testImage})`, // Use double quotes here
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: itemData.color || '#ffffff',
          }}
        >
          <p>{itemData.text || 'Hello'}</p>
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
