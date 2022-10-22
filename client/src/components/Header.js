import { Link } from 'react-router-dom'
import React, { Component} from 'react'
import jwt from 'jsonwebtoken'


class Header extends Component {


	constructor(props){

		super();

		this.state = { 
		  posts: [],
		  user_id: ''
	  };


  }

    componentDidMount() {
        this.getUser();
    }

	getUser(){
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			// console.log(user);
			this.setState({
				user_id: user.email
			})
			if (!user) {
				localStorage.removeItem('token')
			}
		}
		
	}



    render(){
		// console.log(this.state.user_id)
		return (
			<div>
				<Link to="/post">post</Link>
				<Link to="/login">login</Link>
				<Link to="/dashboard">dashboard</Link>
			</div>
		  )
	}
  
}

export default Header