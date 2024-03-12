export const emailTokenTemplate = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
</head>

<body style="
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #ffffff;
      font-size: 14px;
    ">
    <div style="
        max-width: 680px;
        margin: 0 auto;
        padding: 45px 30px 60px;
        background: #f4f7ff;
      
      ">
        <header>
            <table style="width: 100%;">
                <tbody>
                    <tr style="height: 0;">
                        <td>
                            <h1 style="  background: linear-gradient(to right, #1e40af, 
                            #1d4ed8, #3b82f6, #bfdbfe); 
                            -webkit-text-fill-color: transparent; 
                            -webkit-background-clip: text;  ">
                                DeskFlow
                            </h1>

                        </td>
                        <td style="text-align: right;">
                            <span style="font-size: 16px; line-height: 30px; color: #ffffff;">{{date}}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </header>

        <main>
            <div style="
            margin: 0;
            margin-top: 70px;
            padding: 92px 30px 115px;
            background: #ffffff;
            border-radius: 30px;
            text-align: center;
          ">
                <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                    <h1 style="
                margin: 0;
                font-size: 24px;
                font-weight: 500;
                color: #1f1f1f;
              ">
                        Your OTP
                    </h1>
                    <p style="
                margin: 0;
                margin-top: 17px;
                font-size: 16px;
                font-weight: 500;
              ">
                        Hey , {{firstName}}
                    </p>
                    <p style="
                margin: 0;
                margin-top: 17px;
                font-weight: 500;
                letter-spacing: 0.56px;
              ">
                        Thank you for choosing DeskFlow. Use the following OTP
                        to complete the procedure to change your email address. OTP is
                        valid for
                        <span style="font-weight: 600; color: #1f1f1f;">30 minutes</span>.
                        Do not share this code with others, including DeskFlow Employees.
                    </p>
                    <p style="
                margin: 0;
                margin-top: 60px;
                font-size: 40px;
                font-weight: 600;
                letter-spacing: 25px;
                color: #ba3d4f;
              ">
                        {{token}}
                    </p>
                </div>
            </div>
        </main>

        <footer style="
          width: 100%;
          max-width: 490px;
          margin: 20px auto 0;
          text-align: center;
          border-top: 1px solid #e6ebf1;
        ">
            <p style="
            margin: 0;
            margin-top: 40px;
            font-size: 16px;
            font-weight: 600;
            color: #434343;
          ">
                DeskFlow
            </p>
            <p style="margin: 0; margin-top: 16px; color: #434343;">
                Copyright © 2024 DeskFlow. All rights reserved.
            </p>
        </footer>
    </div>
</body>

</html>
`