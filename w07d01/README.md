# W07D01 - JSX and Props

### To Do
- [x] What the heck is React?
- [x] Building a project w/ Create-React-App
- [x] JavaScript and XML (JSX)
- [x] Props

### what is React?
* open source project created/maintained by Facebook/Meta
* component-based => break the UI down into reusable pieces (functions)
* declarative => specify what we want to accomplish, not how
* uses data

### JSX
* JavaScript and XML (eXtensible Markup Language)

```xml
<user>
  <username>alice</username>
  <password>1234</password>
</user>
```

```json
{
  "username": "alice",
  "password": "1234"
}
```


class Header {
  render() {
    return <h2></h2>
  }
}

const header = new Header();
header.render();


### Rules of JSX
* every opening tag must have a closing tag (or be self-closing)
* we must return only one parent element
* each one of our custom components must be capitalized
* javascript can be added to our JSX using curly braces

props => is data from outside our function/component
state => is data that belongs to our function/component

























