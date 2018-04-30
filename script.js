var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    
    componentWillMount: function() {
        console.log('Check data before rendering');
    },
    
    componentDidMount: function() {
        console.log('After render, we can catch DOM elements');
    },
    
    componentWillUpdate: function() {
    console.log('Before changing state');
    },
    
    componentDidUpdate: function() {	
    console.log('After changing state');
    },
    
    shouldComponentUpdate: function(nextProps, nextState) {	
    console.log('Function return true or false, we have acces to two arguments. If function returns false, there would be no new changes and no rerendering');
    return true;
    },
    
    componentWillReceiveProps: function() {	
    console.log('Checking for new props, before reloading page and setting default props');
    },
    
    componentWillUnMount: function() {	
    console.log('We use when we get out of this component, we can use to make some action when user leaves Component');
    },
    
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
    decrement: function() {
        this.setState({
        counter: this.state.counter - 1,
        });
    },
    
    render: function() {
        return React.createElement('div', {},
            React.createElement('p', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')
            );
        }
    });

    var Counters = React.createClass({
        render: function() {
            return React.createElement('div', {},
                React.createElement('div', {id: 'counter'},
                React.createElement(Counter, {})),
                React.createElement('div', {id: 'counter1'},
                React.createElement(Counter, {}))
                )
        }
    });

var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));