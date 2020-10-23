const initState ={
    username:"",
    repos:"",
    following:"",
    followers:"",
    message:"",
    grabbeddata:false

};





const reducer =(state= initState,action)=>{
    if(action.type ==="HANDLE_USERNAME")
    {
        let CurrentUsername = action.e.target.value;
        return{
            ...state,
            username:CurrentUsername
        };
       // console.log(e.target.value)
    }else if (action.type==="SUBMIT_FORM"){
        console.log(action.data);

        if(action.data.public_repos){
        return{
            ...state,
            following:action.data.following,
            followers:action.data.followers,
            repos:action.data.public_repos,
            message:"",
            grabbeddata:true
        };
        }else{
            return {
                ...state,
                message : "user not found"
        
            };
        }
    }
    return state;

};
export default reducer;