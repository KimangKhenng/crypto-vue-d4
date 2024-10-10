<template>
    <div class="register">
        <Form @submit="handleSubmit" :validation-schema="schema">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <Field type="email" name="email" class="form-control" v-model="email" />
                <ErrorMessage name="email" class="alert alert-danger p-2" role="alert" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <Field type="password" name="password" class="form-control" v-model="password" />
                <ErrorMessage name="password" class="alert alert-danger p-2" role="alert" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import axios from 'axios';
import * as yup from 'yup';
export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        return {
            email: '',
            password: '',
            schema: yup.object({
                email: yup.string().required().email(),
                password: yup.string().required().min(8),
            })
        }
    },
    methods: {
        async handleSubmit(values) {
            // console.log(this.email, this.password)
            console.log(values)
            // try {
            //     const response = await axios.post('http://localhost:3000/register', {
            //         email: this.email,
            //         password: this.password
            //     })
            //     console.log(response.data)
            // } catch (err) {
            //     console.log(err)
            // }
            // // After successful login
            // this.resetForm()

        },
        resetForm() {
            this.email = ''
            this.password = ''
        }
    }
}
</script>
<style scoped>
.register {
    margin: 40px;
}
</style>