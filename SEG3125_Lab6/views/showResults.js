<html lang="en-US">
<head>
    <title>Survey Analysis</title>
</head>

<body>
    <h1>Survey analysis</h1>
    <h2>Question 1</h2>
    <ul>
    <% for (var i=0; i<results[0].length; i++){ %>
        <li><%= results[0][i].Q1 %> :  <%= results[0][i].count %></li>
    <% } %>    
    </ul>
    <h2>Question 2</h2>
    <ul>
    <% for (var i=0; i<results[1].length; i++){ %>
        <li><%= results[1][i].Q2 %> :  <%= results[1][i].count %></li>
    <% } %>    
    </ul>
    <h2>Question 3</h2>
    <ul>
    <% for (var i=0; i<results[2].length; i++){ %>
        <li><%= results[2][i].Q3 %> :  <%= results[2][i].count %></li>
    <% } %>    
    </ul>
</body>
</html>