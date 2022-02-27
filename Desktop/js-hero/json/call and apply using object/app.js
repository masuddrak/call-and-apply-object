const rabbi={
    id:77,
    name:'Rabbi Hosain',
    money:2000,
    tritDay:function(bill,tex){
        this.money=this.money-bill-tex;
        console.log(this,'this is your resive money')
    }
}
const sabbir={
    id:44,
    name:"Sabbir Hosain",
    money:1000,
}
// call 
rabbi.tritDay.call(sabbir,200,100);
// apply
rabbi.tritDay.apply(sabbir,[200,100]);