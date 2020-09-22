<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>CSS Template</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="layout.css">
</head>

<body>
    <%
        request.setCharacterEncoding("UTF-8");
        String id = request.getParameter("id");
        String birth = request.getParameter("birth");
        String gender = request.getParameter("gender");
        String email = request.getParameter("email");
        String emailYn = request.getParameter("emailYn");
        String phoneF = request.getParameter("phoneF");
        String phoneM = request.getParameter("phoneM");
        String phoneE = request.getParameter("phoneE");
        String job = request.getParameter("job");
        String[] hobby = request.getParameterValues("hobby");
        String profile = request.getParameter("profile");
    %>

    <h2>CSS Layout Float</h2>
    <p>In this example, we have created a header, two columns/boxes and a footer. On smaller screens, the columns will
        stack on top of each other.</p>
    <p>Resize the browser window to see the responsive effect (you will learn more about this in our next chapter - HTML
        Responsive.)</p>

    <header>
        <h2>Cities</h2>
    </header>

    <section>
        <nav>
            <ul>
                <li><a href="layout.html">London</a></li>
                <li><a href="Paris.html">Paris</a></li>
                <li><a href="Tokyo.html">Tokyo</a></li>
            </ul>
        </nav>

        <article>
            <!-- <h1>Tokyo</h1> -->
            <form action="Tokyo.jsp" method="POST">
                <fieldset>
                    <legend>
                        <h3>개인 정보 입력</h3>
                    </legend>
                    아이디 : <input type="text" name="id" readonly value="<%=id%>"><br>
                    생년월일 : <input type="date" readonly value="<%=birth%>"><br>
                    성 별 : <input type="text" value="<%=gender%>" name="emailYn"><br>
                    E-mail : <input type="email" name="email" readonly value="<%=email%>"><br>
                    메일수신 : <input type="text" value="<%=emailYn%>" name="emailYn"><br>
                    핸드폰 : <select name="phoneF">
                        <option readonly value="<%=phoneF%>" selected><%=phoneF%></option>
                    </select> -
                    <input style="width: 100px;" type="text" name="phoneM" readonly value="<%=phoneM%>"> -
                    <input style="width: 100px;" type="text" name="phoneE" readonly value="<%=phoneE%>"><br>
                    직업 : <select name="job">
                        <option readonly value="<%=job%>" selected><%=job%></option>
                    </select><br>
                    취미 : 
                    <%
                        for(String hob : hobby) {
                    %>
                    <input style="width: 100px; text-align: center;" type="text" value="<%=hob%>" readonly>
                    <%
                        }
                    %><br>
                    자기소개 : <textarea name="profile" cols="50" rows="5" readonly
                        value="<%=profile%>"><%=profile%></textarea>
                </fieldset>
            </form>
        </article>
    </section>

    <footer>
        <p>Footer</p>
    </footer>

</body>

</html>