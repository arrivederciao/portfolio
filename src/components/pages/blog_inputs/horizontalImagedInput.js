import React, { useState } from 'react';
import '../../../assets/BlogPage.css';
import placeholderImg from '../../../assets/media/blogimg.jpg';
import ImageUploader from '../../dropzone/imageUploader';
import '../../../assets/input.css';
const HorizontalImagedBlogPost = () => {


    const [motto, setMotto] = useState('');
    const [mottoBackground, setMottoBackground] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    const [titleBackground, setTitleBackground] = useState('');
    const [paragraphTitle, setParagraphTitle] = useState()
    const [paragraph, setParagraph] = useState();
    const [paragraphsArray, setParagraphsArray] = useState([
        {
            paragraphTitle: '',
            paragraph: '',
        }
    ]);

    const [paragraphsArrayArray, setParagraphsArrayArray] = useState([paragraphsArray]);

    const handleTextareaInput = (index, type, event) => {
        const updatedParagraphs = [...paragraphsArray];
        updatedParagraphs[index][type] = event.target.value;
        setParagraphsArray(updatedParagraphs);
    };





    return (
        <div className="horizontal-blog-post-container">
            <div className="horizontal-blog-post-header">
                <div
                    className="horizontal-blog-post-header-image-container"
                    style={{ backgroundImage: `url(${titleBackground || placeholderImg})` }}

                >
                    <ImageUploader imagefixed={'fixed'} />
                </div>


                <input className="horizontal-blog-post-header-title-container" type='text' placeholder='lutfen baslik yaziniz' onChange={(e) => { setBlogTitle(e.target.value) }} />
                <input type='text' />
            </div>

            <div className="horizontal-blog-post-row">
                <div className="horizontal-blog-post-row-side horizontal-blog-post-row-single-side"
                    contentEditable={true}
                    onInput={(e) => setBlogDescription(e.currentTarget.textContent)} >
                    <span className="horizontal-blog-post-row-side-first-letter" >&nbsp;{blogDescription && blogDescription.charAt(0)}{!blogDescription && "A"}</span>
                    {blogDescription && blogDescription.substring(1)}{!blogDescription && "ciklama yaziniz"}
                </div>
            </div>

            <div className="horizontal-blog-post-motto-container" style={{ backgroundImage: `url(${mottoBackground || placeholderImg})` }}>
                <ImageUploader imagefixed={'fixed'} />
                <div className="horizontal-blog-post-motto absolute-centered">{motto}</div>

            </div>


            <div className={`horizontal-blog-post-row`} >
                <div className="horizontal-blog-post-row-side">

                    {paragraphsArray.map((paragraph, index) => (
                        <div key={index} className="row-paragraph-textarea-container">
                            <textarea
                                className="horizontal-blog-post-row-title row-title-textarea"
                                placeholder="Write The Title"
                                value={paragraph.paragraphTitle}
                                onInput={(e) => handleTextareaInput(index, 'paragraphTitle', e)}
                            />

                            <textarea
                                className="horizontal-blog-post-row-paragraph row-title-textarea"
                                placeholder="Write The Paragraph"
                                value={paragraph.paragraph}
                                onInput={(e) => handleTextareaInput(index, 'paragraph', e)}
                            />
                        </div>
                    ))}






                    <button className="button2" onClick={null}>+</button>









                </div>
                <div className="horizontal-blog-post-row-side">

                    <ImageUploader />
                </div>
            </div>






        </div>
    )
}
export default HorizontalImagedBlogPost;