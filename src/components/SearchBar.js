import React, { Component } from "react";
import { Form, FormGroup, Label, Input} from "reactstrap";
import styled from "styled-components";

const FormWrapper = styled(FormGroup)`
    position: relative;
    span {
        position: absolute;
        right: 10px;
        top: -4px;
        font-weight: 700;
        font-size: 24px;
        color: red;
        :hover {
            color: darkred;
            cursor: pointer;
        }
    }
`

class SearchBar extends Component {
    state = {
        term: "",
    }

    handleInputChange = event =>  {
        //update state of term
        this.setState({ term: event.target.value });
        this.props.searchYouTube(event.target.value);
    }

    render() {
        return (
            <Form onSubmit={event => event.preventDefault()}>
                <FormWrapper>
                    <Label for="youtubeSearch" hidden>YouTube Search</Label>
                    <Input type="text" 
                           name="youtubeSearch"
                           id="youtubeSearch" 
                           placeholder="Search Term" 
                           value={this.state.term}
                           onChange={this.handleInputChange}
                    />
                    <span onClick={() => this.setState({ term: "" })}>x</span>
                </FormWrapper>
            </Form>
    
        );
    }
}

export default SearchBar;