import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "6a3d7b02-82be-431d-a25a-6f5f64bc249b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success('Form submitted successfully!');
            alert(data.message);
            console.log("Success", data);
            event.target.reset();
        }
        else {
            console.log("Error", data);
            toast.error('Error submitting form');
            setResult('');
        }
    };


    return (
        <motion.div 
        initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        className='text-center p-6 py-20 lg:px-32 w-full 
        overflow-hidden  ' id='contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2
            text-center'>
                Contact <span className='underline underline-offset-4
                decoration-1 under font-light'>With Us</span>
            </h1>
            <p className='text-center text-gray-500 mb-12
            max-w-90 mx-auto'>
                Ready to Make a Move? ,
                Let's Build Your <br />Future Together
            </p>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8 '>
                <div className=' flex flex-wrap gap-'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input className='w-full border border-gray-300
                    rounded py-3 px-4 mt-2' type="text"
                            name='name'
                            placeholder='Your name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Email
                        <input className='w-full border border-gray-300
                    rounded py-3 px-4 mt-2' type="email"
                            name='Email'
                            placeholder='Your Email' required />
                    </div>

                </div>
                <div className='my-6 text-left'>
                    Messaage
                    <textarea className='  border border-gray-300 rounded
                    py-3 px-4 mt-2 w-full h-32'
                        name='Message' placeholder='Message'
                        required />
                </div>
                <div>
                    <button className='bg-blue-500 text-white
                    py-3 px-6 rounded hover:bg-blue-600 
                    transition-colors cursor-pointer'>
                        {result ? result : 'Send Message'}
                    </button>
                </div>
            </form>

        </motion.div>
    )
}

export default Contact