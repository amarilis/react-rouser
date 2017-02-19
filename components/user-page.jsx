import React from 'react';


const UserPage = React.createClass ({
    // UserPage
    render() {
        console.log('UserPage - this.props.data => '+this.props.data);
        var id= this.props.params.id;
        return (
            <div>
                <h2>User {id}</h2>
            </div>
        );
    }
});

export default UserPage;