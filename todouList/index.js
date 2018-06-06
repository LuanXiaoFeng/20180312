import React,{Component} from 'react';
import ToHead from './header';
import List from './list';
import Footer from './footer'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[
                {name:"呵呵0",id:0,checked:true},
                {name:"呵呵1",id:1,checked:false}
            ],
            title:'all'
        };
    }
    click=(ev)=>{
        let {checked}=ev.target;
        let {arr}=this.state;
        arr.forEach(e=>e.checked=checked);
        this.setState({arr})
    }
    changeChecked=(id)=>{
        let {arr}=this.state;
        arr.forEach(e=>{
            if(e.id===id){
                e.checked=!e.checked
            }
        })
        this.setState({arr});
    }
    add=(obj)=>{
       let {arr}=this.state;
       arr.unshift(obj) ;
       this.setState({arr})
    }
    Fnn=(title)=>{
        //let {title}=this.state;
        this.setState({title})
    }
    del=(id)=>{
        let {arr}=this.state;
        arr=arr.filter(e=>e.id!==id);
        this.setState({arr});
    }
    changeS=(id,newVal)=>{
        let {arr}=this.state;
        arr.forEach(e=>{
            if(e.id===id){
                e.name=newVal;
            }
        })
        this.setState({arr});
    }
    render() {
        let {arr,title}=this.state;
        let all=arr.length?arr.every(e=>e.checked):false;
        let arr2=[]
        let len=arr.length;
        // if(title=='all'){
        //     arr2=[...arr]
        // }else if(title=='active'){
        //     arr2=arr.filter(e=>!e.checked)
        // }else if(title=='completed'){
        //     arr2=arr.filter(e=>e.checked)
        // }  
        arr2=arr.filter(e=>{
            if(e.checked) len --;
            switch(title){
                case 'all':
                    return e;
                break;
                case 'active':
                    return !e.checked;
                break;
                case 'completed':
                    return e.checked;
                break;
            }
        })    
        let newArr=arr2.map((e,i)=>{
            return <List {...{
                key:i,
                txt:e.name,
                id:e.id,
                checked:e.checked,
                cc:this.changeChecked,
                del:this.del,
                changeS:this.changeS
            }}/>
        })
        return (
            <section className="todoapp">
            <div>
                <ToHead {...{add:this.add}}/>
                <section className="main">
                    <input 
                        className="toggle-all" 
                        type="checkbox" 
                        checked={all}
                        onClick={this.click}
                    />
                    <ul className="todo-list">
                        {newArr}
                    </ul>
                </section>
                <Footer {...{len:len,Fnn:this.Fnn,title:title}}/>
            </div>
        </section>  
        );
    }
}

export default App;