import React from "react";

export class Profile extends React.Component{
    constructor() {
        super();
        this.state = {
            userName: ""
        }
    }
    componentDidMount() {
        fetch("http://o9150210.beget.tech/getUser")
            .then(function(response){
                return response.json();
             })
            .then(user=>{
                this.setState({ //использовать только функции-стрелки, т.к. function expession имеет свой this
                    userName: user.name+" "+user.lastname
                })
            });
        console.log("ШАГ2 Компонента отрисована");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render(){
        console.log("ШАГ1 Компонента в процессе отрисовки");
        return <div className="row">
            <div className="col-2">
                <img src="https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" width="100%" alt=""/>
            </div>
            <div className="col-10">
                <h1>{this.state.userName}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aut cum dicta ea explicabo fugiat fugit hic, iure maiores modi nemo non omnis perferendis perspiciatis porro quam reprehenderit totam! Amet ex id, ipsam minus nemo non odit perspiciatis quisquam. Animi beatae consequatur explicabo hic, illo ipsam reiciendis vel! Quos?</p>
            </div>

        </div>
    }
}