import React,{Component} from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    click=()=>{
        let {Fnn}=this.props;
        Fnn('all')
    }
    clickTwo=()=>{
        let {Fnn}=this.props;
        Fnn('active')
    }
    clickLast=()=>{
        let {Fnn}=this.props;
        Fnn('completed')
    }
    render() {
        let {len,title}=this.props;
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{len}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    <li>
                        <a 
                            href="#/all" 
                            className={title==='all'?"selected":""}
                            onClick={this.click}
                        >全部</a>
                    </li>
                    <li>
                        <a 
                            href="#/active" 
                            className={title==='active'?"selected":""}
                            onClick={this.clickTwo}
                        >未完成</a>
                    </li>
                    <li>
                        <a 
                            href="#/completed" 
                            className={title==='completed'?"selected":""}
                            onClick={this.clickLast}
                        >已完成</a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;