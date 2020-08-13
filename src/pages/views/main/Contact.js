import React from 'react'
import { useForm } from "react-hook-form"
import firebase from "../../../firebase"
import axios from "axios"

export const Contact = () => {
    const {register, handleSubmit, errors} = useForm();
    const onHandleSubmit = (data) =>{
        axios.post('http://localhost/php3/public/api/contact', data)
        .then( function(res){
            alert('Gửi thành công !')
        })
    }
    return (
        <div className="section">
            <div className="container">
                <section className="mb-4">
                {/*Section heading*/}
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                {/*Section description*/}
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
                <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" onSubmit={handleSubmit(onHandleSubmit)}>
                        {/*Grid row*/}
                        <div className="row">
                        {/*Grid column*/}
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                            <label htmlFor="name" >Your name</label>
                            <input type="text" id="name" name="name" className="form-control" ref={register({required: true})} />
                            {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                            <label htmlFor="email" >Your email</label>
                            <input type="email" id="email" name="email" className="form-control" ref={register({required: true})} />
                            {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                        {/*Grid row*/}
                        <div className="row">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                            <label htmlFor="subject" >Subject</label>
                            <input type="text" id="subject" name="title" className="form-control" ref={register({required: true})} />
                            {errors.title && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        </div>
                        {/*Grid row*/}
                        {/*Grid row*/}
                        <div className="row">
                        {/*Grid column*/}
                        <div className="col-md-12">
                            <div className="md-form">
                            <label htmlFor="message">Your message</label>
                            <textarea type="text" id="message" name="mes" rows={2} className="form-control md-textarea" defaultValue={""} ref={register({required: true})} />
                            {errors.mes && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        </div>
                        {/*Grid row*/}
                        <div className="text-center text-md-left">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </form>
                    <div className="status" />
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-map-marker-alt fa-2x" />
                        <p>San Francisco, CA 94126, USA</p>
                        </li>
                        <li><i className="fas fa-phone mt-4 fa-2x" />
                        <p>+ 01 234 567 89</p>
                        </li>
                        <li><i className="fas fa-envelope mt-4 fa-2x" />
                        <p>contact@mdbootstrap.com</p>
                        </li>
                    </ul>
                    </div>
                    {/*Grid column*/}
                </div>
                </section>
            </div>
        </div>
    )
}
