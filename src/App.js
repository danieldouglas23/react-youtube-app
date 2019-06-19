import React, { Component } from "react";
import _ from "lodash";
import { Container, Row, Col } from "reactstrap";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import { VideoList, VideoListItem } from "./components/VideoList"; //curlies used since named exports instead of default

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        //search youtube API
        this.searchYouTube("golden retriever puppies");
    }

    //template... function declaration
    searchYouTube = term => {
        API.searchYouTube(term)
        .then(res => {
            this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] })
        })
        .catch(err => {
            console.log(err);
        });
    }

    onVideoSelect = selectedVideo => {
        this.setState({ selectedVideo: selectedVideo })
    }

    throttledSearch = _.debounce(this.searchYouTube, 800);

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>YouTube React Search</h1>
                        <SearchBar searchYouTube={this.throttledSearch} />
                    </Col>
                </Row>
                <Row>
                    <Col md="8">
                        <VideoDetail selectedVideo={this.state.selectedVideo} />
                    </Col>
                    <Col md="4">
                        <VideoList>
                            {this.state.videos.map(video => (
                                <VideoListItem 
                                    video={video} 
                                    key={video.id.videoId} 
                                    selectedVideo={this.state.selectedVideo} 
                                    onVideoSelect={this.onVideoSelect} />
                            ))}
                        </VideoList>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;