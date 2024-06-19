"use server"


import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"
import React from "react"
import { getErrorMessage, validateString} from "@/lib/utils/utils"



const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    
        const message  = formData.get("message")
        const senderEmail = formData.get("senderEmail")
        const senderName = formData.get("senderName");

        
        // simple server-side validation
        if (!validateString(senderEmail, 500)) {
            return {
                error: "Invalid sender email",
            };
        }
        if (!validateString(senderName, 500)) {
            return {
                error: "Invalid sender name",
            };
        }
        if (!validateString(message, 5000)) {
            return {
                error: "Invalid message",
            };
        }

        let data;
        try {
            data = await resend.emails.send({
              from: "Contact Form <onboarding@resend.dev>",
              to: "shivangtripathi101@gmail.com",
              subject: "Message from contact form",
              reply_to: senderEmail,
              react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
                senderName: senderName               
              }),
            });
          } catch (error: unknown) {
            return {
              error: getErrorMessage(error),
            };
          }

          return {data};
}