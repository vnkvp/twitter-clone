import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

class LikePost extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            likes: 50,
            updated: false
        };
    }

    updateLikes = () => {

        if (!this.state.updated) {
            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes + 1,
                    updated: true
                };
            });

        } else {

            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes - 1,
                    updated: false
                };
            });
        }
    }

    render() {
        return (
            <div onClick={this.updateLikes} className='postLikes'>
                <FavoriteBorderIcon fontSize='small' />
                {this.state.likes}
            </div>
        );
    }
}

export default LikePost;