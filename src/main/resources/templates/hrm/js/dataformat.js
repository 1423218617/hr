function dataFormat(createdate) {
	var createdateFomat = parseInt(createdate);
    //使用日期数字新建Date对象
    var createdateTrue = new Date(createdateFomat);
    //本地化日期
    var createdateString = createdateTrue.toLocaleString();

    return createdateString;
}