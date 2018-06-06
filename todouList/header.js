import React,{Component} from 'react';
class ToHead extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            val:''
        };
    }
    change=(ev)=>{
        let {value:val}=ev.target;
        this.setState({val})
    }
    keyup=(ev)=>{
        let {add}=this.props;
        if(ev.keyCode===13){
            let {val}=this.state;
            let obj={
                name:val,
                id:+new Date,
                checked:false,
                editing:false
            }
            add(obj);
            this.setState({val:''})
        }
    }
    render() {
        let {val}=this.state;
        return (
            <header className="header" >
                <h1>todos</h1>
                <input 
                    className="new-todo" 
                    placeholder="请输入内容"
                    value={val}
                    onChange={this.change}
                    onKeyUp={this.keyup}
                />
            </header>
        );
    }
}

export default ToHead;