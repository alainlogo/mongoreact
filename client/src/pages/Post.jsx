import React, { Component }  from 'react';
import axios from 'axios';
import Header from '../components/Header';
// import jwt from 'jsonwebtoken'

class Dashboard extends Component{


    constructor(props){

          super(props);

          this.state = { 
            posts: [],
            user_id: '',
        };


    }



    componentDidMount() {
        this.getUser();
        this.getPost();
        
    }

    getPost() {
        // axios.get('http://localhost:1337/api/liste')
        axios.get('https://api.imgflip.com/get_memes')

          .then(res => {
            const posts = res.data.data.memes;
            console.log(posts)
            this.setState({ 
              posts 
             });
        })
    }

    async getUser(){
        const req = await fetch('http://localhost:1337/api/quote', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			console.log("user est là")
            console.log(data.user._id)

		} else {
			alert(data.error)
		}
        this.setState({
            user_id : data.user._id
        })
    }

    render() {

    const posts = this.state.posts
    console.log(posts)

    const users = this.state.user_id
    console.log(users)



    return (
        <div className='laliste'>
            <Header></Header>
            <div>
            <div> {users}</div>
                <h1>post</h1>

                 <div>
                    {posts.map(post => (
                        <div key={post.id}>
                            <img src={post.url} alt="" />
                            <p >{post.name}</p>
                        </div>
                    ))}
                    {/* {posts.map(post => (
                        <p key={post._id}>{post.contenu}</p>
                    ))} */}
                </div>
            </div>

        </div>
    )
  
}
}

export default Dashboard;