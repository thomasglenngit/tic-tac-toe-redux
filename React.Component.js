class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark"
// <line items - component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.
//FYI
// The <div /> syntax is transformed at build time to React.createElement('div'). The example above is equivalent to:

// return React.createElement('div', {className: 'shopping-list'},
// React.createElement('h1', /* ... h1 children ... */),
// React.createElement('ul', /* ... ul children ... */)
// );
// The ShoppingList component above only renders built-in DOM components like <div /> and <li />. But you can compose and render custom React components too. For example, we can now refer to the whole shopping list by writing <ShoppingList />. Each React component is encapsulated and can operate independently; this allows you to build complex UIs from simple components.
// />
