/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import pdf from 'html-pdf'
import nodemailer from 'nodemailer'
import fs from 'fs'

export const generateIDCardHTML = (member: any) => {
    // Generate HTML content for the ID card
    const htmlContent = `
        <html>
            <head>
                <!-- Add any necessary styling or fonts here -->
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                    }
                    /* Add your styling for the ID card here */
                </style>
            </head>
            <body>
                <!-- Your ID card content goes here -->
                <div>
                    <h1>Member ID Card</h1>
                    <p>Name: ${member.name}</p>
                    <p>Member ID: ${member.id}</p>
                    <!-- Add other ID card details as needed -->
                </div>
            </body>
        </html>
    `

    return htmlContent
}

export const sendEmailWithAttachment = async (
    pdfPath: any,
    recipientEmail: any
) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'eventmanagement.texas@gmail.com',
            pass: 'tgvb ynwk xcol xlig',
        },
    })

    const mailOptions = {
        from: 'eventmanagement.texas@gmail.com',
        to: recipientEmail,
        subject: 'ID Card',
        text: 'Attached is your ID Card.',
        attachments: [
            {
                filename: 'IDCard.pdf',
                path: pdfPath,
                encoding: 'base64',
            },
        ],
    }

    return transporter.sendMail(mailOptions)
}
