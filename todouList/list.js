import React,{Component} from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            val:'',
            editing:false
         };
    }
    change=()=>{
        let {id,cc}=this.props;
        cc(id);
    }
    click=()=>{
        let {id,del}=this.props;
        del(id);
    }
    db=()=>{
        let {txt}=this.props;
        //val:txt 先让数据显示出来
        this.setState({editing:true,val:txt},()=>{
            this.refs.a.focus();
        })
    }
    txtChange=(ev)=>{
        //双击后改变input的内容
        let {value:val}=ev.target;
        this.setState({val})
    }
    blur=()=>{
        let {val}=this.state;
        let {changeS,id,txt}=this.props;
        //如果val是真的，就调用修改函数
        //如果修改后的内容和原数据相同，也不调用函数
        if(val&&val!==txt){
            changeS(id,val);
        }       
        this.setState({editing:false})
    }
    render() {
        let {txt,checked}=this.props;
        let {val,editing}=this.state;
        let eclass=checked?'completed':'';
        if(editing)eclass+=' editing';
        return (
            <li className={eclass}>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        checked={checked}
                        onChange={this.change}
                    />
                    <label onDoubleClick={this.db}>{txt}</label>
                    <button className="destroy" onClick={this.click}></button>
                </div>
                <input 
                className="edit"
                value={val}
                ref="a"
                onChange={this.txtChange}
                onBlur={this.blur}
                />
            </li> 
        );
    }
}

export default List;