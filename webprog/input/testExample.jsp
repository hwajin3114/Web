<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%
        request.setCharacterEncoding("UTF-8");
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
    %>
    <h3>입력된 값</h3>
    <table border="1px solid black" style="border-collapse: collapse; text-align: center;">
        <tr>
            <td style="width: 100px;">성</td>
            <td style="width: 150px;"><%=firstName%></td>
        </tr>
        <tr>
            <td>이름</td>
            <td><%=lastName%></td>
        </tr>
        <tr>
            <td>이메일</td>
            <td><%=email%></td>
        </tr>
    </table><br/>
    <a href="testExample.html">입력화면으로</a>
</body>
</html>