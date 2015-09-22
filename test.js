{
	"id": 0,
	"orderNo": null,
	"restAmount": 0,
	"reserveAmount": 0,
	"lossAmount": 0,
	"purchaseAmount": 0,
	"purchaseFreightAmount": 0,
	"brokenAmount": 0,
	"brokenFreightAmount": 0,
	"payedAmount": 0,
	"purchasePayedAmount": 0,
	"itemCount": 0,
	"purchaseOrderCount": 0,
	"receiptCount": 0,
	"paymentCount": 0,
	"deliveryCount": 0,
	"couponCount": 0,
	"order": {
		"id": 22031,
		"orderNo": "K2015062903019",
		"offline": false,
		"channel": 4,
		"status": 11,
		"amount": 10120,
		"freightAmount": 0,
		"discount": 0,
		"deliveryType": 1,
		"deliveryCity": "",
		"deliveryContact": "",
		"deliveryPhone": "",
		"deliveryAddress": "",
		"customerId": 14315,
		"customerName": "王春霞",
		"customerPhone": "1596127",
		"customerCompanyId": 14315,
		"customerCompanyName": "常州市万旺塑料有限公司",
		"salesBy": 1166,
		"remark": "",
		"createdAt": 1435558318000,
		"updatedAt": 1436873953000,
		"createdBy": 1166,
		"updatedBy": 16173,
		"orderitems": null,
		"orderContract": null,
		"purchaseOrders": null,
		"orderReceipts": null,
		"orderDeliveries": null,
		"actions": null,
		"couponCode": null,
		"useDeposit": false,
		"salesByName": null,
		"createdByName": null,
		"updatedByName": null,
		"orderCoupons": null,
		"totalAmount": 10120,
		"payedAmount": 0,
		"deliveryCount": 0,
		"customerCompanyAddr": null,
		"restAmount": 0,
		"reserveAmount": 0,
		"lossAmount": 0,
		"purchaseAmount": 0,
		"future": false,
		"brokenAmount": 0,
		"brokenFreightAmount": 0,
		"restWeight": 0,
		"type": 1,
		"unComfirmAmount": 0,
		"approveLevel": 0,
		"currency": "CNY",
		"setId": true,
		"setRemark": true,
		"setCustomerPhone": true,
		"setCustomerName": true,
		"setUpdatedBy": true,
		"setUpdatedAt": true,
		"setCreatedAt": true,
		"setCreatedBy": true,
		"setCustomerId": true,
		"setType": true,
		"setStatus": true,
		"setAmount": true,
		"setOrderNo": true,
		"setActions": false,
		"setFuture": true,
		"setSalesBy": true,
		"setOffline": true,
		"setChannel": true,
		"setDiscount": true,
		"setDeliveryContact": true,
		"orderReceiptsIterator": null,
		"orderitemsSize": 0,
		"setOrderContract": false,
		"setDeliveryCity": true,
		"setPurchaseOrders": false,
		"orderReceiptsSize": 0,
		"setFreightAmount": true,
		"setCustomerCompanyId": true,
		"setOrderitems": false,
		"setOrderReceipts": false,
		"setDeliveryType": true,
		"setDeliveryAddress": true,
		"purchaseOrdersIterator": null,
		"setDeliveryPhone": true,
		"setCustomerCompanyName": true,
		"orderitemsIterator": null,
		"purchaseOrdersSize": 0,
		"orderCouponsIterator": null,
		"setCustomerCompanyAddr": false,
		"setRestWeight": false,
		"setSalesByName": false,
		"orderDeliveriesIterator": null,
		"setOrderDeliveries": false,
		"setPayedAmount": false,
		"orderCouponsSize": 0,
		"setBrokenAmount": true,
		"actionsSize": 0,
		"setDeliveryCount": false,
		"setCouponCode": false,
		"orderDeliveriesSize": 0,
		"setUseDeposit": false,
		"setOrderCoupons": false,
		"setRestAmount": false,
		"setReserveAmount": false,
		"setLossAmount": false,
		"setPurchaseAmount": false,
		"setBrokenFreightAmount": true,
		"setUnComfirmAmount": false,
		"setApproveLevel": true,
		"setCurrency": true,
		"setTotalAmount": true,
		"setCreatedByName": false,
		"setUpdatedByName": false
	},
	"freightCost": 0,
	"receiptedCargoAmount": 0,
	"receiptedFreightAmount": 0,
	"cargoLossAmount": 0,
	"freightLossAmount": 0,
	"category": "HDPE",
	"designation": "T60-800",
	"setId": true,
	"setOrder": true,
	"setPurchasePayedAmount": false,
	"setPaymentCount": false,
	"setReceiptCount": false,
	"setPurchaseFreightAmount": false,
	"setCouponCount": false,
	"setPurchaseOrderCount": false,
	"setItemCount": false,
	"setCargoLossAmount": true,
	"setReceiptedFreightAmount": true,
	"setReceiptedCargoAmount": true,
	"setFreightLossAmount": true,
	"setOrderNo": false,
	"setFreightCost": true,
	"setPayedAmount": false,
	"setBrokenAmount": true,
	"setDeliveryCount": false,
	"setRestAmount": false,
	"setReserveAmount": true,
	"setLossAmount": false,
	"setPurchaseAmount": false,
	"setBrokenFreightAmount": true,
	"setCategory": true,
	"setDesignation": true
}

function a(name) {
	debugger;
	this.name = name;
	this.getname = function() {
		debugger;
		console.log(this.name);
	}
}

function b(name) {
	debugger;
	a.call(this, name);
}

var c = new b('g');
c.getname();



{
	category: "LDPE",
	nameEn: null,
	nameCn: "低密度聚乙烯"
}, {
	category: "PPCP",
	nameEn: null,
	nameCn: "共聚聚丙烯"
}, {
	category: "PP",
	nameEn: null,
	nameCn: "聚丙烯"
}, {
	category: "ABS",
	nameEn: null,
	nameCn: "丙烯腈/丁二烯/苯乙烯共聚物"
}, {
	category: "PPHM",
	nameEn: null,
	nameCn: "均聚聚丙烯"
}, {
	category: "LLDPE",
	nameEn: null,
	nameCn: "线性聚乙烯"
}, {
	category: "PVC",
	nameEn: null,
	nameCn: "聚氯乙烯"
}


Date.prototype.Format  =   function(fmt)  {  
	debugger;
	var  o  =   {   
		"M+" :  this.getMonth()  +  1, // 月份   
		"d+" :  this.getDate(), // 日  
		"H+" :  this.getHours(), // 小时   
		"m+" :  this.getMinutes(), // 分   
		"s+" :  this.getSeconds(), // 秒    
		"q+" :  Math.floor((this.getMonth()  +  3)  /  3), // 季度   
		"S" :  this.getMilliseconds()   // 毫秒   
	};  
	if  (/(y+)/.test(fmt))  { 
		fmt  =  fmt.replace(RegExp.$1,   (this.getFullYear()  +  "")     .substr(4  -  RegExp.$1.length));  
	} 
	for  ( var  k  in  o)   
		if  (new  RegExp("("  +  k  +  ")").test(fmt))  {
			fmt  =  fmt.replace(RegExp.$1,   (RegExp.$1.length  ==  1)  ?  (o[k])       :  (("00"  +  o[k]).substr((""  +  o[k]).length)));  
		}   
	return  fmt; 
}

/**  
 * * 例子：    * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") >> 2013-12-31 10:09:01.010
 * (new Date()).Format("yyyy-M-d h:m:s.S")      >> 2013-12-31 10:9:1.10
 */
 
var  time1  =  new  Date().Format("yyyy-MM-dd HH:mm:ss"); 
var  time2  =  new  Date().Format("yyyy-MM-dd");
