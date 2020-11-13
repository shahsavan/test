import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Formik, Field, Form} from 'formik';

export default class FormikBasic extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div dir={'rtl'}>
                <h1>Sign Up</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <label htmlFor="firstName">نام</label>
                        <Field id="firstName" name="firstName" placeholder="Jane"/>

                        <label htmlFor="lastName">نام خانوادگی</label>
                        <Field id="lastName" name="lastName" placeholder="Doe"/>

                        <label htmlFor="email">ایمیل</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        <button type="submit">ثبت</button>
                    </Form>
                </Formik>
            </div>
        );
    }
}