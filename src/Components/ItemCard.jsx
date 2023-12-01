import React from 'react';
import './ItemCard.scss';

function ItemCard({isHovering, item}) {
    const RenderDiv = () => {
        return (
            <div className="card">
                <div className="content">
                    <div className="front">
                        <div className="front-content">
                            <small className="badge">{item.type}</small>
                            <div className="description">
                            <div className="title">
                                <p className="title"><strong>{item.name}</strong> </p>
                            </div>
                            <p className="card-footer"> 30 Mins &nbsp; | &nbsp; 1 Serving </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
      }



    // {isHovering && (<div className="image-info">Name: {item.name}, Some other information: </div>)}
    return (
        <>
            {isHovering && RenderDiv()}
        </>
    );
}

export default ItemCard;
