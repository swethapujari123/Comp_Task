import React, {Fragment, useEffect} from "react"
import * as reactStore from "../store/action";
import {connect} from "react-redux";
import ShowProfile from "./ShowProfile";
import "../App.css";
const Api=props=>{
  const handleChange= e =>{
    props.handleUsername(e);
  };
  const handleSubmitForm = e=>{
    props.submitForm(e,props.username)
  }
  if(props.grabbeddata ===true){
      return <ShowProfile/>;
  }
  return(
    <div >

      <input type ="text" placeholder="Enter gitusername" onChange={handleChange}/>
      <button onClick={handleSubmitForm}>Search</button>
    </div>
  );
};

const mapStateToProps = state=>{
  return{
    username: state.username,
    repos:state.repos,
    following:state.following,
    followers:state.followers,
    message:state.message,
    grabbeddata:state.grabbeddata
  };
};
const mapDispatchToProps = dispatch=>{
  return{
    handleUsername : e=>dispatch(reactStore.handleUsername(e)),
    submitForm:(e,username)=> dispatch(reactStore.submitForm(e,username))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Api);