(function($) {

	"use strict";

	document.addEventListener('DOMContentLoaded', function(){
    var today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth(),
        monthTag =["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
        day = today.getDate(),
        days = document.getElementsByTagName('td'),
        selectedDay,
        eventDays = document.getElementsByClassName('event'),
        setDate,
        daysLen = days.length;
// options should like '2014-01-01'
    function Calendar(selector, options) {
        this.options = options;
        this.draw();
    }
    
    Calendar.prototype.draw  = function() {
        this.getCookie('selected_day');
        this.getOptions();
        this.drawDays();
        var that = this,
            //reset = document.getElementById('reset'),
            pre = document.getElementsByClassName('pre-button'),
            next = document.getElementsByClassName('next-button');
            
            pre[0].addEventListener('click', function(){that.preMonth(); });
            next[0].addEventListener('click', function(){that.nextMonth(); });
            //reset.addEventListener('click', function(){that.reset(); });
        while(daysLen--) {
            days[daysLen].addEventListener('click', function(){that.clickDay(this); });
        }
    };
    
    Calendar.prototype.drawHeader = function(e) {
        var headDay = document.getElementsByClassName('head-day'),
            headMonth = document.getElementsByClassName('head-month');

            e?headDay[0].innerHTML = e : headDay[0].innerHTML = day;
            headMonth[0].innerHTML = monthTag[month] +" - " + year;        
     };
    
    Calendar.prototype.drawDays = function() {
        var startDay = new Date(year, month, 1).getDay(),
//      下面表示这个月总共有几天
            nDays = new Date(year, month + 1, 0).getDate(),
    
            n = startDay;
//      清除原来的样式和日期
        for(var k = 0; k <42; k++) {
            days[k].innerHTML = '';
            days[k].id = '';
            days[k].className = '';
        }

        for(var i  = 1; i <= nDays ; i++) {
            days[n].innerHTML = i; 
            n++;
        }
        
        var arr_eventDaysClass = Array.from(eventDays);            
        var arr_eventDays = [];
        var arr_eventDaysDate = [];

        for (var i = 0; i < arr_eventDaysClass.length; i++) {
            console.log(arr_eventDaysClass[i]);
            console.log(arr_eventDaysClass[i].classList[1]);
            arr_eventDays.push(arr_eventDaysClass[i].classList[1]);
        }
        console.log(arr_eventDaysClass);
        console.log(arr_eventDays);
        //var arr_eventDays_classlist = Array.from(eventDays_classlist);

        for (var i = 0; i < arr_eventDays.length; i++) {
            arr_eventDaysDate.push(new Date(arr_eventDays[i].replace(
                /(\d\d\d\d)(\d\d)(\d\d)/, '$1-$2-$3')));
        }
        var eventDay = arr_eventDaysDate[0];
        console.log(arr_eventDaysDate);

        for(var j = 0; j < 42; j++) {

            if(days[j].innerHTML === ""){
                
                days[j].id = "disabled";
                
            }else if(j === day + startDay - 1){
                if((this.options && (month === setDate.getMonth()) && (year === setDate.getFullYear())) || (!this.options && (month === today.getMonth())&&(year===today.getFullYear()))){
                    this.drawHeader(day);
                    days[j].id = "today";
                }
            }

            for(var k = 0; k < arr_eventDaysDate.length; k++) {
                if(j === arr_eventDaysDate[k].getDate() + startDay - 1){
                    if((this.options && (month === setDate.getMonth()) && (year === setDate.getFullYear())) || (!this.options && (month === today.getMonth())&&(year===today.getFullYear()))){
                        this.drawHeader(day);
                        days[j].className = "event";
                    }
                }
            }

            /*if(selectedDay){
                if((j === selectedDay.getDate() + startDay - 1)&&(month === selectedDay.getMonth())&&(year === selectedDay.getFullYear())){
                    days[j].className = "selected";
                    this.drawHeader(selectedDay.getDate());
                }
            }*/
            
        }


    };
    
    Calendar.prototype.clickDay = function(o) {
        var selected = document.getElementsByClassName("selected"),
            len = selected.length;
        if(len !== 0){
            selected[0].className = "";
        }
        if (!o.classList.contains("event")){
            o.classList.add("selected");
        }
        selectedDay = new Date(year, month, o.innerHTML);
        var selectedDayClassName = selectedDay.toISOString();
        selectedDayClassName = selectedDayClassName.substring(0,selectedDayClassName.lastIndexOf('T')).replace(/\-/gm,"");
        selectedDayClassName = parseInt(selectedDayClassName, 10) + 1;
        console.log("Geklicktes Datum: " + selectedDayClassName);
        this.drawHeader(o.innerHTML);
        this.setCookie('selected_day', 1);
        var beitrag = document.getElementsByClassName(selectedDayClassName);
        var arr_beitrag = Array.from(beitrag);

        var beitraegeMitShow = document.getElementsByClassName("show");
        var arr_beitraegeMitShow = Array.from(beitraegeMitShow);

        console.log(beitrag);
        if(beitrag.length == 0){
            arr_beitraegeMitShow.forEach(function(element) {
               element.classList.remove("show");
               element.classList.add("hide"); 
            });
        }else{
            arr_beitraegeMitShow.forEach(function(element) {
               element.classList.remove("show");
               element.classList.add("hide"); 
            });
            
            arr_beitrag.forEach(function(element) {
                element.classList.remove("hide");
                element.classList.add("show");
            });
            };
        };
    
    Calendar.prototype.preMonth = function() {
        if(month < 1){ 
            month = 11;
            year = year - 1; 
        }else{
            month = month - 1;
        }
        this.drawHeader(1);
        this.drawDays();
    };
    
    Calendar.prototype.nextMonth = function() {
        if(month >= 11){
            month = 0;
            year =  year + 1; 
        }else{
            month = month + 1;
        }
        this.drawHeader(1);
        this.drawDays();
    };
    
    Calendar.prototype.getOptions = function() {
        if(this.options){
            var sets = this.options.split('-');
                setDate = new Date(sets[0], sets[1]-1, sets[2]);
                day = setDate.getDate();
                year = setDate.getFullYear();
                month = setDate.getMonth();
        }
    };
    
     Calendar.prototype.reset = function() {
         month = today.getMonth();
         year = today.getFullYear();
         day = today.getDate();
         this.options = undefined;
         this.drawDays();
     };
    
    Calendar.prototype.setCookie = function(name, expiredays){
        if(expiredays) {
            var date = new Date();
            date.setTime(date.getTime() + (expiredays*24*60*60*1000));
            var expires = "; expires=" +date.toGMTString();
        }else{
            var expires = "";
        }
        document.cookie = name + "=" + selectedDay + expires + "; path=/";
        console.log(document.cookie);
    };
    
    Calendar.prototype.getCookie = function(name) {
        if(document.cookie.length){
            var arrCookie  = document.cookie.split(';'),
                nameEQ = name + "=";
            for(var i = 0, cLen = arrCookie.length; i < cLen; i++) {
                var c = arrCookie[i];
                while (c.charAt(0)==' ') {
                    c = c.substring(1,c.length);
                    
                }
                if (c.indexOf(nameEQ) === 0) {
                    selectedDay =  new Date(c.substring(nameEQ.length, c.length));
                }
            }
        }
    };
    var calendar = new Calendar();
    
        
}, false);

})(jQuery);
