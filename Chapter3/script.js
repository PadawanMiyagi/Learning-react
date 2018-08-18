var destination = document.querySelector('#container');

class HelloWorld extends React.Component {
    
    render(){
        return <p>Hello {this.props.greetTarget}!</p>
    }

}

ReactDOM.render( 
    <HelloWorld greetTarget="Batman"/>,
    destination
);