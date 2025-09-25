export const contactMessageTemplate = (name: string, email: string, message: string, subject?: string, phone?: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New Contact Message</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #4F46E5; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Message</h1>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${name}</div>
                </div>
                <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">${email}</div>
                </div>
                ${subject ? `
                <div class="field">
                    <div class="label">Subject:</div>
                    <div class="value">${subject}</div>
                </div>
                ` : ''}
                ${phone ? `
                <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value">${phone}</div>
                </div>
                ` : ''}
                <div class="field">
                    <div class="label">Message:</div>
                    <div class="value">${message}</div>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};
