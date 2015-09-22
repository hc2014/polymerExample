<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <jsp:include page="${basePath}/platform/resource/ksresource.jsp"></jsp:include>
    <link rel="stylesheet" type="text/css" href="${basePath}/pdm/material/category/assets/css/index_category.css?version=${version}"/>

    <script type="text/javascript" src="${basePath}/pdm/material/category/assets/js/category.js?version=${version}"></script>
</head>
<body>

<%--app--%>
<div id="categoryIndexModule" ng-app="categoryIndexApp">
    <div ui-view></div>
</div>
</body>
</html>
