import React, {Fragment} from "react";
import {connect} from "react-redux";
//import "../App.css";
const ShowProfile = props=>{
    return (
        <div >
            <h1>username {props.username}</h1>
            <h1>Repositories {props.repos}</h1>
            <h1> following {props.following}</h1>
            <h1>followers {props.followers}</h1>
    

        </div>
    );
};

const mapStateToProps = state =>{
    return {
        username : state.username,
        repos: state.repos,
        following: state.following,
        followers: state.followers,
        //message : state.message,
        grabbeddata: state.grabbeddata,

    };
};
export default connect(mapStateToProps,null) (ShowProfile);