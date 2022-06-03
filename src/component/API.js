import React,{Component} from "react";
import axios from 'axios'
class PostLister extends Component{
    constructor(){
        super();
        this.state={
            post:[],
        }
    }
    GetApi=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            // console.log(res);
            this.setState({post:res.data})
        })
    }
    render(){
        const {post}=this.state
        return(
            <>
            <button className="Btn" onClick={this.GetApi}>Update-Btn</button>
            <div>{
                    post.map(post=> {
                       return(
                        <div>{post.title}
                         {/* {<pre>{JSON.stringify(post,null,2)}</pre>} */}
                        
                        </div>
                       )
                    })
                }
                <div>
                </div>
            </div>
            </>
        )
    }
}
export default PostLister;












