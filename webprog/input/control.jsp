<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    td {width: 100px;}
</style>
<body>
    <%
        request.setCharacterEncoding("UTF-8");
        String id = request.getParameter("id");
        String password = request.getParameter("password");
    %>
    <h3>출력 페이지</h3>
    <table border="1px solid black" style="border-collapse: collapse; text-align: center;">
        <tr>
            <td>ID</td>
            <td><%=id%></td>
        </tr>
        <tr>
            <td>PW</td>
            <td><%=password%></td>
        </tr>
    </table><br/>
    <a href="control.html">입력화면으로</a>
</body>
</html>