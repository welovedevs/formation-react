# Hello World

```html
<div id="root">
    <!-- This element's contents will be replaced with your component. -->
</div>
```

```javascript
ReactDOM.render(
    React.createElement('h1', null, 'Hello World!'), 
    document.getElementById('root')
);
```

---

# Hello World (JSX)

```html
<div id="root">
    <!-- This element's contents will be replaced with your component. -->
</div>
```

```javascript
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
```

---

# Virtual DOM

---

```javascript
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

---

![VirtualDOM rocks](https://reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif)
