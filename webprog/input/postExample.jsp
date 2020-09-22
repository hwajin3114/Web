<!-- jsp 페이지라고 구분해주는거 -->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>postExample.jsp</title>
</head>
<body>
    <!-- <%  %> 안에 쓰는건 자바 문법 -->
    <%
        request.setCharacterEncoding("UTF-8");
        String userName = request.getParameter("userName");
        String passwd = request.getParameter("password");
    %>
    <h3>사용자명 : <%=userName%></h3>
    <h3>비밀번호 : <%=passwd%></h3><br/>
    <a href="postExample.html">입력화면으로</a><br/>
</body>
</html>