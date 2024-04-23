import React, { useState } from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const [contact, setContact] = useState({name: '', email: '', phone: '', subect: '', message: ''});
    const handleSetText = (e)=>{
        setContact({...contact, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:5000/api/contact/sendcontact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: contact.name, email: contact.email, phone: contact.phone, subject: contact.subject, message: contact.message})
        });
        const json = await response.json();
        if(json.success){
            alert(json.message);
            console.log(json.data);
        }
        else{
            alert(json.error);
        }
        setContact({ name: '', email: '', phone: '', subject: '', message: '' });
    }
    return (
        <div>
            <div className="contact-form h-fit mt-20">
                <div className="h-[592px]">
                    <div className="contact-heading absolute top-56 z-[800] left-[50%] -translate-x-[50%] mx-auto">
                        <div className="font-bold sm:text-5xl text-3xl text-white text-center">Contact Form</div>
                        <div className="sm:text-3xl text-xl text-center font-medium mt-5 text-slate-400">Reach out to us. Feel free to contact.</div>
                    </div>
                    <img src="https://media.istockphoto.com/id/1303501751/photo/technology-allows-me-to-stay-connected-via-email.jpg?s=612x612&w=0&k=20&c=AVqkTE5RpyVAJFB8LVTeg2D8Zy95UZvkmetJ-U6o1xM=" alt="contact_image" className="w-full h-full bg-gradient-to-r from-black opacity-80" />
                </div>
                <div className="min-h-[1200px] xl:min-h-[600px] w-full pb-10">
                    <div className="absolute p-28 rounded-full border-[36px] border-blue-700 left-[13%] translate-y-16 xl:block hidden"></div>
                    <div className="square-circle hidden lg:grid grid-cols-8 absolute gap-3 right-[50%] translate-x-[325%] top-[925px]">
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                        <div className="small-circle p-[4px] rounded-full bg-blue-100"></div>
                    </div>
                </div>
                <div className="absolute top-[450px] left-[50%] -translate-x-[50%] md:h-[600px] h-[1200px] md:max-w-[820px] max-w-[700px] w-full bg-white grid md:grid-cols-2 grid-cols-1 shadow-2xl rounded-xl overflow-hidden">
                    <div className="contact-details column bg-[#fff] w-full h-full rounded-full flex items-center justify-center">
                        <div className="contact-details-main w-full h-full">
                            <div className="border-[24px] border-blue-300 absolute z-[500] md:-bottom-[96px] bottom-[1125px] md:left-44 left-[70%] -translate-x-[15%] p-16 rounded-full"></div>
                            <div className="details py-[2.3rem] px-[2.2rem] bg-white w-full h-full">
                                <h1 className="text-2xl font-bold text-blue-600 relative z-[501]">Let's get in touch</h1>
                                <p className="my-5 text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime vel consectetur magnam voluptas porro fuga!</p>
                                <div className="my-8">
                                    <div className="my-3 fles items-center justify-center"><i className="fa-solid fa-envelope text-xl mr-2"></i> test123@gmail.com</div>
                                    <div className="my-3 fles items-center justify-center"><i className="fa-solid fa-phone text-xl mr-2"></i> 123-456-7890</div>
                                </div>
                                <div className="contact-social-media mt-12">
                                    <h1 className="text-md ">Contact with us</h1>
                                    <div className="flex items-center justify-start mt-5 gap-3">
                                        <AiOutlineTwitter className="fa-brands fa-linkedin text-5xl font-bold py-1 px-2 bg-gradient-to-bl from-blue-900 to-blue-600 text-black rounded-md transition hover:duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200 cursor-pointer" />
                                        <FaFacebook className="fa-brands fa-facebook text-5xl font-bold py-1 px-2 bg-gradient-to-bl from-blue-900 to-blue-600 text-black rounded-md transition hover:duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200 cursor-pointer"/>
                                        <FaInstagram className="fa-brands fa-twitter text-5xl font-bold py-1 px-2 bg-gradient-to-bl from-blue-900 to-blue-600 text-black rounded-md transition hover:duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200 cursor-pointer"/>
                                        <FaLinkedin className="fa-brands fa-instagram text-5xl font-bold py-1 px-2 bg-gradient-to-bl from-blue-900 to-blue-600 text-black rounded-md transition hover:duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200 cursor-pointer"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-main column bg-blue-600 w-full h-full flex items-center justify-center rounded-br-xl rounded-tr-xl after:content-[''] after:absolute after:p-4 after:bg-blue-600 after:rotate-45 md:after:top-16 md:after:left-[50%] md:after:-translate-x-[50%]">
                        <div className="contact-form-main-container w-full h-full bg-blue-600">
                            <div className="circle-one rounded-full p-9 bg-gradient-to-tl from-blue-900 absolute z-[500] md:top-4 top-[510px] right-8 opacity-80"></div>
                            <div className="circle-one rounded-full p-16 bg-gradient-to-tl from-blue-900 absolute z-[500] md:top-40 top-[650px] opacity-80 -right-12"></div>
                            <div className="circle-one rounded-full p-24 bg-gradient-to-tl from-blue-900 absolute z-[500] -bottom-20 opacity-80 right-12"></div>
                            <div className="form w-full h-full py-[2.3rem] px-[2.2rem] relative z-[501]">
                                <h1 className="text-2xl font-bold">Contact Form</h1>
                                <input type="text" name="name" value={contact.name} onChange={handleSetText} placeholder="Name" className="block w-full font-bold text-lg mt-8 mb-8 leading-4 py-2 px-5 rounded-full bg-blue-600 outline-none  border-2 border-white" />
                                <input type="email" name="email" value={contact.email} onChange={handleSetText} placeholder="Email" className="block w-full font-bold text-lg my-8 leading-4 py-2 px-5 rounded-full bg-blue-600 outline-none border-2 border-white" />
                                <input type="text" name="phone" value={contact.phone} onChange={handleSetText} placeholder="Phone" className="block w-full font-bold text-lg my-8 leading-4 py-2 px-5 rounded-full bg-blue-600 outline-none border-2 border-white" />
                                <input type="text" name="subject" value={contact.subject} onChange={handleSetText} placeholder="Subject" className="block w-full font-bold text-lg mt-8 mb-8 leading-4 py-2 px-5 rounded-full bg-blue-600 outline-none  border-2 border-white" />
                                <textarea name="message" value={contact.message} onChange={handleSetText} placeholder="Message" className="w-full h-full max-h-24 block font-bold text-lg my-8 leading-4 py-3 px-5 bg-blue-600 rounded-xl outline-none border-2 border-white"></textarea>
                                <button onClick={handleSubmit} className="py-3 px-7 font-bold bg-white text-black mb-8 text-xl rounded-md transition hover:duration-300 hover:scale-105 hover:shadow-2xl">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
