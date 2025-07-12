# DOM selectors #
- document.getElementById();
     - It will target only the first Matching Node
- document.getElementByClassName():
     -  it will target all the matching nodes
     - it will return an HTML collection (Array like   structure)
- document.getElementByTagName():
     - it will target all the matching nodes
     - it will return an HTML collection (array like structure).
- document.getElementsByName():
     - it will target the elements based on Name Attribute's value.
     - it will return a collection.
- document.querySelector():
   - It can target based on id,class,tag name
   - it will return only the first matching element even its id/class/tag name.
- document.querySelectorAll():
   - It can target based on id,class,tag name
   - it will return all the matching elements even its id/class/tag name.
   
   # 1. HTML Element #

   ## Create 
   - document.createElement(NodeName)
      - Ex: document.createElement("h1)
      - Ex: document.createElement("div)
      - Ex: document.createElement("p")
   - To add the content in a Node we have to use the properties like 
      - textContent
      - innerText
      - innerHTML
   - Once after the creation the node, we have to append it to the DOM.
      - appendChild():
        - syntax: container.appendChild(NodeName)

   ## Read 
   - DOM Selectors - we can read the elements based on id, class, tagname, name attribute, using querySelector and querySelectorAll.

   ## update 
   - update Content
     - this is just about updating the content of node
      - textContent
      - innerText
      - innerHTML
   - update Node
     - This is just about replacing the old node with new node.
     - Syntax: container.replaceChild(newNode, oldNode)

  ## Delete 
     - to delete the node
      - container.removeChild(NodeName)

# 2. HTML Attributes #

 ## Create
- node.setAttribute("attributeName", "attributeValue)

 ## Read
 - node.getAttribute("attributeName)

 ## Update
 - node.setAttribute("attributeName", "attributeValue")

 ## Delete
 - node.removeAttribute("attributeName")

 # 3. CSS Properties 

## create /add
## read
## update
## delete

