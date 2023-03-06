import React, { Component, Fragment } from 'react';
import { Link } from 'react-scroll';

export class CardBlog extends Component {
    render() {
        const { date, imageLink, presentor, tags, cardTitle, cardContent, aosclasses } = this.props;
        return (
            <Fragment>
                <div data-aos={aosclasses} className="card-blog">
                    <span className="time-content">{date}</span>
                    <img 
                        src={imageLink} 
                        className="speaker-icon" 
                        alt="Placeholder"
                    />
                    <p className="card-name-indicator">{presentor}</p>
                    <div className="topic-tags-group">
                        {
                            tags.map((tag, i) => {
                                return(
                                    <p className="tag" key={i}>{tag}</p>
                                )
                            })
                        }
                    </div>
                    <h2>{cardTitle}</h2>
                    <p className="content-paragraph">{cardContent}</p>
                        <Link
                            to="Home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >
                            <button className="stack-btn-card">
                                Learn More
                            </button>
                        </Link>
                    <div className="overlay"></div>
                </div>
            </Fragment>
        )
    }
}

export default CardBlog
