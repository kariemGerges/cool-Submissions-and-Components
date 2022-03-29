Vue.component('name-code',{
    data: function () {
        return {
            toggle:false
        }
    },
    props: ['name', 'code'],
    template: '<div v-on:click="toggle = !toggle"> ' +
        '<div v-if="!toggle" v-bind:class="hide">{{name}}</div>' +
        '<div v-if="toggle" v-bind:class="hide" >{{code}}</div>' +
        '</div>'
})
new Vue ({
    el : "#app",
    data:{
        nameCodes:[
            {name:"Protagonist",codename:"Joker"},
            {name:"Anne",codename:"Panther"},
            {name:"Ryuji",codename:"Skull"}
        ],
        user:[
            {name:"", email:""}
        ],
        form:{
            name:"",
            email:"",
        },
        message:"",
        message2:"",

    },
    computed:{
      name: function () {
          return this.form.name;
      },
      email:function () {
         return this.form.email;
      }
    },
    watch:{
        name: function () {
            if (this.form.name.length > 2) {
                this.message = "";
            } else {
                this.message = "Name should be more than 2 characters";
                this.message2 = "Not Submitted";
            }
        },
        email: function () {
            let emailFormat =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (emailFormat.test(this.form.email)){
                this.message = ""
                this.message2 = "Submitted"
            } else{
                this.message = "This is not a Valid Email Address, Email should be user@example.xxx";
                this.message2 = "Not Submitted";
            }
        }
    }
})