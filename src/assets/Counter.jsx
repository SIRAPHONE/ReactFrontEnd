import { useState } from 'react';

export default function Contact() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count -1);
    }
    return(
        <div>
            <h1>Count value is: {count}</h1>
            <button>{increment}>increment</button>
            <button>{decrement}>decrement</button>
        </div>
    );
}