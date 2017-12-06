// tsify with tsconfig {"target": "es6", and "jsx": "preserve",}
// import myComp from './components/myComp/myComp'

// works with watch-webstorm with tsconfig {"target": "es6", and "jsx": "preserve",}
// import MyComp from './components/MyComp/MyComp.jsx';


// works with tscRules wiht tsconfig {"target": "es5", and "jsx": "react",}
// import MyComp from './components/MyComp/MyComp';

import MyComp from './components/MyComp/MyComp';

const App = () => {
    return <div>
        <div>Helloa</div>
        <MyComp />
    </div>;
};

ReactDOM.render(<App/>, document.getElementById('root'));