data = {
    mgs: 'Hung yeu Thu',
    message: '',
    content:'',
    isChecked: false,
    checkedNames: [],
    classObject: {
        active: true,
        'text-danger': true
    }
}

var vm = new Vue({
    el: '#example',
    data: data,

    computed: {
        reversedMessage: function () {
            return this.mgs.split(' ').reverse().join(' ')
        },

        //thuộc tính computed sẽ không được render lại vì nó caching.
        //Chỉ render khi nó có dependency
        now: function () {
            return Date.now()
        }
    }
})