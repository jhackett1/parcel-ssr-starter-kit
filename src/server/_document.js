const document = (styles, html) => 
`<!doctype html>
<html lang="en">
<head>
    <title>My React App</title>
    ${styles}
</head>
<body>
    <div id="root">${html}</div>
    <script src="/bundle.js" defer></script>
</body>
</html>`

export default document