
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactUsForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        console.log(data)
        toast.success("Successfully email sent!")
    };
  
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-[20px] flex flex-col justify-start w-full gap-5">
      <input 
        {...register("fullName", { required: "Full Name is required"})} 
        type="text" 
        className="h-[46px] p-2.5 bg-[#F8F8F8] border border-[#0f2443] hover:border-blue-400 focus:border-blue-400 outline-blue-400 placeholder-black" 
        placeholder="Full Name*" 
      />
      {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
      <input 
        {...register("phoneNumber", { required: "Phone Number is required"})} 
        type="number" 
        className="h-[46px] p-2.5 bg-[#F8F8F8] border border-[#0f2443] placeholder-black hover:border-blue-400 focus:border-blue-400 outline-blue-400" 
        placeholder="Phone Number*" 
      />
      {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}
      <input 
        {...register("email", { required: "Email is required" })} 
        type="email" 
        className="h-[46px] p-2.5 bg-[#F8F8F8] border border-[#0f2443] placeholder-black hover:border-blue-400 focus:border-blue-400 outline-blue-400" 
        placeholder="Email Address*" 
      />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      <textarea 
        {...register("message", { required: "Message is required" })} 
        className="h-[106px] p-2.5 bg-[#F8F8F8] border border-[#0f2443] placeholder-black hover:border-blue-400 focus:border-blue-400 outline-blue-400" 
        placeholder="Message*" 
      />
      {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      <button className="flex justify-start">
        <div className="w-40 h-[46px] p-2.5 border border-[#0f2443] justify-center items-center gap-2.5 inline-flex mb-4">
          <p className="text-[#0f2443] text-sm font-light font-['Public Sans'] uppercase">
            Submit
          </p>
        </div>
      </button>
    </form>
  );
};

export default ContactUsForm;
