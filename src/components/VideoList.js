import React from "react";

export const VideoList = (props) => {
    //gives permission for this to act as a wrapper element and for other elements
    // (components) to be rendered inside
    return (
        <ul>{props.children}</ul>

    );

}

export const VideoListItem = (video) => {
    return (
        <li>
            <img src={video.video.snippet.thumbnails.medium.url} />
        </li>

    );

}

