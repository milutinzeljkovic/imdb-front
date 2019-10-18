<template>
  <v-card 
    class=" pa-5"
    max-width="900"

  >
  <form class="register-form">
    <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
        v-model="password"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
    ></v-text-field>
    <v-text-field
        v-model="passwordConfirmation"
        :rules="[rules.required]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password confirmation"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
    ></v-text-field>
    <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit" >submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
  </v-card>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    mixins: [validationMixin],

    validations: {
        name: { required, maxLength: maxLength(10) },
        email: { required, email },
        select: { required },
        checkbox: {
            checked (val) {
            return val
            },
        },
    },

    data: () => ({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        show1: false,
        checkbox: false,
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('The email and password you entered don\'t match'),
        },
      
    }),

    computed: {
        checkboxErrors () {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.checked && errors.push('You must agree to continue!')
            return errors
      },
        selectErrors () {
            const errors = []
            if (!this.$v.select.$dirty) return errors
            !this.$v.select.required && errors.push('Item is required')
            return errors
      },
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
      },
        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
      },
    },

    methods: {
        ...mapActions(['registerUser']),
        async submit () {
            const userObj = {
                email: this.email,
                password: this.password,
                password_confirmation: this.passwordConfirmation,
                name: this.name
            }
            console.log(userObj);
            
            await this.registerUser(userObj);                        
            this.$router.push('/movies');
            
      },
        clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
            this.password='',
            this.passwordConfirmation=''
      },
        async onRegisterFormSubmit() {
            const userObj = {
                email: this.email,
                password: this.password,
                password_confirmation: this.passwordConfirmation,
                name: this.name
            }
            await this.registerUser(userObj);                        
            this.$router.push('/movies');
        }
    },
  }
</script>

<style>
    .register-form{
        width: 70%;
        margin-left: 25%;
    }
    @media (max-width: 500px) {
        .register-form{
        width: 90%;
        margin-left: 5%;

    }
    }
</style>