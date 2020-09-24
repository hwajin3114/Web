<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        input {
            margin: 5px;
        }
        
        div {
            padding: 5px;
        }
    </style>
</head>
<body>
    <%
        request.setCharacterEncoding("UTF-8");
        String id = request.getParameter("id");
        String firstName = request.getParameter("first_name");
        String lastName = request.getParameter("last_name");
        String email = request.getParameter("email");
        String gender = request.getParameter("gender");
    %>
    <a href="http://192.168.0.73/webprog/css/main.html">MAIN</a>
    <div style="background-color: rgb(221, 240, 252); border:1px solid dotted black;">
        <form action="jspUpdate.jsp" method="post">
            <input type="text" name="id" value="<%=id%>">
            <input type="text" name="firstName" value="<%=firstName%>">
            <input type="text" name="lastName" value="<%=lastName%>">
            <input type="text" name="email" value="<%=email%>">
            <input type="text" name="gender" value="<%=gender%>">
            <input type="submit" value="전송">
            <input type="reset" value="취소">
        </form>
    </div>
</body>
</html>